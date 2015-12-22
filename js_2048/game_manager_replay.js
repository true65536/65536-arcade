function GameManager(size, InputManager, Actuator, StorageManager) {
  this.size           = size; // Size of the grid
  this.inputManager   = new InputManager;
  this.storageManager = new StorageManager;
  this.actuator       = new Actuator;
  
  this.startTiles     = 2;
  this.aiPlaying      = false;
  this.aiPlayDelay    = 100;
  this.loading        = true;

  this.playSequence   = [{d: 1, r: [4, 12]}, {d: 2, r: [2, 0]}];
  this.playSequenceIndex = 0;
  this.initialBoard   = [2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));
  this.inputManager.on("aiPlay", this.aiPlay.bind(this));
  this.inputManager.on("aiFaster", this.aiFaster.bind(this));
  this.inputManager.on("aiSlower", this.aiSlower.bind(this));
  this.inputManager.on("changeRecord", this.changeRecord.bind(this));

  //this.setup();
  this.changeRecord();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.storageManager.clearGameState();
  this.actuator.continueGame(); // Clear the game won/lost message
  if(this.aiPlaying == true)
	this.aiPlay();
  this.actuator.setAiPlayButton('Start');
  this.setup();
};

// Keep playing after winning (allows going over 2048)
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continueGame(); // Clear the game won/lost message
};

// Return true if the game is lost, or has won and the user hasn't kept playing
GameManager.prototype.isGameTerminated = function () {
  return this.over || (this.won && !this.keepPlaying);
};

// Set up the game
GameManager.prototype.setup = function () {
	this.grid        = new Grid(this.size);
	this.score       = 0;
	this.over        = false;
	this.won         = false;
	this.keepPlaying = false;
	
	this.addInitialTiles();

	// Update the actuator
	this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Set up the initial tiles of each game record
GameManager.prototype.addInitialTiles = function () {
  for (var i = 0; i < this.initialBoard.length; i++) {
	if(this.initialBoard[i] != 0) {
		var x = (15 - i) % 4;
		var y = Math.floor((15 - i) / 4);
		var tile = new Tile({x: x, y: y}, this.initialBoard[i]);
		this.grid.insertTile(tile);
	}
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = this.playSequence[this.playSequenceIndex].r[0];
	var x = this.playSequence[this.playSequenceIndex].r[1] % 4;
	var y = Math.floor(this.playSequence[this.playSequenceIndex].r[1] / 4);
    var tile = new Tile({x: x, y: y}, value);

    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.storageManager.getBestScore() < this.score) {
    this.storageManager.setBestScore(this.score);
  }

  // Clear the state when the game is over (game over only, not win)
  if (this.over) {
    this.storageManager.clearGameState();
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.storageManager.getBestScore(),
    terminated: this.isGameTerminated()
  });

};

// Represent the current game as an object
GameManager.prototype.serialize = function () {
  return {
    grid:        this.grid.serialize(),
    score:       this.score,
    over:        this.over,
    won:         this.won,
    keepPlaying: this.keepPlaying
  };
};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2: down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048 && self.aiPlaying == false) self.won = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // Up
    1: { x: 1,  y: 0 },  // Right
    2: { x: 0,  y: 1 },  // Down
    3: { x: -1, y: 0 }   // Left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};

GameManager.prototype.getHint = function () {
	if(!this.aiPlaying)
		$.post( "http://2048.aigames.nctu.edu.tw/get_best_move.php", { board: this.grid.getGridString() }, this.move.bind(this));
};

GameManager.prototype.aiPlay = function () {
	if (this.loading)
		return;
	if (this.aiPlaying) {
      this.aiPlaying = false;
      this.actuator.setAiPlayButton('Resume');
	  
    } else {
	  if(this.playSequenceIndex == this.playSequence.length) {
		this.playSequenceIndex = 0;
		this.restart();
		return;
	  }
      this.aiPlaying = true;
      this.actuator.setAiPlayButton('Pause');
      this.moveAndAiContinuePlay();
    }
};

GameManager.prototype.moveAndAiContinuePlay = function() {
  if(this.aiPlaying) {
	  if(this.playSequenceIndex == this.playSequence.length) {
		this.aiPlay();
        this.actuator.setAiPlayButton('Restart');
		return;
	  }
	  this.move(this.playSequence[this.playSequenceIndex].d);
	  this.playSequenceIndex++;
	  var timeout = this.aiPlayDelay;
	  if (this.aiPlaying && !this.over && !this.won) {
		setTimeout(this.moveAndAiContinuePlay.bind(this), timeout);
	  }
  }
};

GameManager.prototype.aiFaster = function () {
	if(this.aiPlayDelay >= 50)
		this.aiPlayDelay /= 2;
	else if(this.aiPlayDelay == 25)
		this.aiPlayDelay = 0;
	if(this.aiPlayDelay == 0)
		$('#faster-button').stop().fadeOut();
};

GameManager.prototype.aiSlower = function () {
	if(this.aiPlayDelay == 0) {
		$('#faster-button').stop().fadeIn();
		this.aiPlayDelay = 25;
	}
	else if(this.aiPlayDelay <= 6400)
		this.aiPlayDelay *= 2;
};

GameManager.prototype.changeRecord = function () {
	var jsonfile = "http://2048.aigames.nctu.edu.tw/record/" + $('#select-32768-record option:selected').val() + '.txt';
	var self = this;
	this.loading = true;
	$('#loading-img').show();
	$.get(jsonfile, function(data) {
		var myObject = eval('(' + data + ')');
		self.initialBoard = myObject.i;
		self.playSequence = myObject.s;
		self.playSequenceIndex = 0;
		self.loading = false;
		$('#loading-img').hide();
		self.restart();
	});
};
