function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.z                = position.z;
  this.w                = position.w;
  this.v                = position.v;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y, z: this.z, w: this.w, v: this.v };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
  this.z = position.z;
  this.w = position.w;
  this.v = position.v;
};
