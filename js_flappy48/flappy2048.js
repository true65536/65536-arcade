
var disable_mouse = false;

document.body.style.margin = '0px';
//document.body.style.overflow = 'hidden';



var raf = function (x) { alert('Your browser is not compatible with this site. Sorry :('); }
if (window.requestAnimationFrame) raf = window.requestAnimationFrame;       // Firefox 23 / IE 10 / Chrome / Safari 7 (incl. iOS)
else if (window.mozRequestAnimationFrame) raf = window.mozRequestAnimationFrame;    // Firefox < 23
else if (window.webkitRequestAnimationFrame) raf = window.webkitRequestAnimationFrame; // Older versions of Safari / Chrome



var game = {};
game.ended = false;
game.div = document.createElement('div');
game.div.style.cursor = 'pointer';
game.div.style.overflow = 'hidden';
game.div.style.position = 'relative';
game.div.style.width = '100%';
game.div.style.height = '100%';
document.body.appendChild(game.div);

var deathflash = document.createElement('div');
deathflash.style.background = '#FF0000';
deathflash.style.zIndex = 9999999;
deathflash.style.width = '100%';
deathflash.style.height = '100%';
deathflash.style.left = '0px';
deathflash.style.top = '0px';
deathflash.style.position = 'absolute';
deathflash.style.display = 'none';
deathflash.innerHTML = '&nbsp;';
game.div.appendChild(deathflash);



var cell_size = 88;





var app_img_showing = false;
var android_hider_div = document.createElement('div');
var android_app_div = document.createElement('div');
var android_app_img = null;
var android_x_div = document.createElement('div');

var ua = navigator.userAgent.toLowerCase();
var is_android = (ua.indexOf("android") >= 0);



var tsma = 0;
function mbsma () {
 tsma++;
 if (tsma == 1) {
  if (is_android) {
   app_img_showing = true;
   android_hider_div = document.createElement('div');
   android_hider_div.style.background = '#606060';
   android_hider_div.style.position = 'fixed';
   android_hider_div.style.zIndex = '99999997';
   android_hider_div.style.left = '0px';
   android_hider_div.style.top = '0px';
   android_hider_div.innerHTML = '&nbsp;';
   android_hider_div.onclick = function () {}
   android_app_img = document.createElement('img');
   var img = android_app_img;
   img.width = 512;
   img.height = 676;
   img.border = 0;
   img.src = '/f2/androidapp.jpg';
   var a = document.createElement('a');
   a.href = 'http://play.google.com/store/apps/details?id=air.com.hypah.release.A2048flap';
   a.appendChild(img);
   android_app_div.appendChild(a);
 
   var a = document.createElement('a');
   var ximg = document.createElement('img');
   ximg.width = 64;
   ximg.height = 64;
   ximg.src = '/f2/androidx.png';
   ximg.border = 0;
   a.onclick = function () {
    app_img_showing = false;
    android_hider_div.style.display = 'none';
    android_app_img.style.display = 'none';
    android_x_div.style.display = 'none';
    game.div.style.visibility = 'visible';
   }
   a.appendChild(ximg);
   android_x_div.appendChild(a);
 
   game.div.style.visibility = 'hidden';
 
   android_app_div.style.position = 'fixed';
   android_x_div.style.position = 'fixed';
   android_app_div.style.zIndex = '99999998';
   android_x_div.style.zIndex = '99999999';
   
   document.body.appendChild(android_hider_div);
   document.body.appendChild(android_app_div);
   document.body.appendChild(android_x_div);
   
   resize();
  }
 }
}































var smashy_showing = false;
var smash_hider_div = document.createElement('div');
var smash_app_div = document.createElement('div');
var smash_smashy = null;
var smash_x_div = document.createElement('div');


var tlsmco = 0;
function tlSmash () {
 tlsmco++;
 if (tlsmco == 1) {
  smashy_showing = true;
  smash_hider_div = document.createElement('div');
  smash_hider_div.style.background = '#606060';
  smash_hider_div.style.position = 'fixed';
  smash_hider_div.style.zIndex = '99999997';
  smash_hider_div.style.left = '0px';
  smash_hider_div.style.top = '0px';
  smash_hider_div.innerHTML = '&nbsp;';
  smash_hider_div.onclick = function () {}
  smash_smashy = document.createElement('img');
  var img = smash_smashy;
  img.width = 512;
  img.height = 676;
  img.border = 0;
  img.src = 'http://smashcopters.com/smashcopta.jpg';
  var a = document.createElement('a');
  a.href = 'http://smashcopters.com';
  a.appendChild(img);
  smash_app_div.appendChild(a);

  var a = document.createElement('a');
  var ximg = document.createElement('img');
  ximg.width = 64;
  ximg.height = 64;
  ximg.src = '/f2/androidx.png';
  ximg.border = 0;
  a.onclick = function () {
   smashy_showing = false;
   smash_hider_div.style.display = 'none';
   smash_smashy.style.display = 'none';
   smash_x_div.style.display = 'none';
   game.div.style.visibility = 'visible';
  }
  a.appendChild(ximg);
  smash_x_div.appendChild(a);
  smash_x_div.style.cursor = 'pointer';


  game.div.style.visibility = 'hidden';

  smash_app_div.style.position = 'fixed';
  smash_x_div.style.position = 'fixed';
  smash_app_div.style.zIndex = '99999998';
  smash_x_div.style.zIndex = '99999999';
  
  document.body.appendChild(smash_hider_div);
  document.body.appendChild(smash_app_div);
  document.body.appendChild(smash_x_div);
  
  resize();
 }
}

























var resize = function () {
 ww = Math.ceil(window.innerWidth) - 200;
 hh = Math.ceil(window.innerHeight);
 
 if (hh > ww) {
  parody.div.innerHTML = 'If you are having trouble playing on your phone, try turning it sideways to landscape mode!';//This website is a parody and is not affiliated with Flappy Bird or .GEARS Studios';
 } else {
  parody.div.innerHTML = '';
 }
 
 var max_hh = 900;
 if (hh > max_hh) {
  game.div.style.marginTop = Math.round((hh - max_hh)/2)+'px';
  hh = max_hh;
 } else {
  game.div.style.marginTop = '0px';
 }
 
 for (var i = smashedbirds.length-1; i>=0; i--) {
  var smashedbird = smashedbirds[i];
  smashedbird.resize();
 }
 for (var i = rustedpipes.length-1; i>=0; i--) {
  var rustedpipe = rustedpipes[i];
  rustedpipe.resize();
 }
 for (var i = pipes.length-1; i>=0; i--) {
  var pipe = pipes[i];
  pipe.resize();
 }


 if (android_app_img != null) {
  var sc1 = Math.max(hh, 676)/676;
  var sc2 = Math.max(ww, 512)/512;
  var sc = Math.min(sc1, sc2);
  var img = android_app_img;
  var iw = Math.round(512 * sc);
  var ih = Math.round(676 * sc);
  img.width = iw;
  img.height = ih;
  android_hider_div.style.width = ww+'px';
  android_hider_div.style.height = hh+'px';
  android_app_div.style.left = Math.round(ww/2 - iw/2)+'px';
  android_app_div.style.top = Math.round(hh/2 - ih/2)+'px';
  android_x_div.style.left = Math.round(ww/2 - iw/2 + 0)+'px';
  android_x_div.style.top = Math.round(hh/2 - ih/2 - 0)+'px';
 }
  


 if (smash_smashy != null) {
  var sc1 = Math.max(hh, 676)/676;
  var sc2 = Math.max(ww, 512)/512;
  var sc = Math.min(sc1, sc2);
  var img = smash_smashy;
  var iw = Math.round(512 * sc);
  var ih = Math.round(676 * sc);
  img.width = iw;
  img.height = ih;
  smash_hider_div.style.width = ww+'px';
  smash_hider_div.style.height = hh+'px';
  smash_app_div.style.left = Math.round(ww/2 - iw/2)+'px';
  smash_app_div.style.top = Math.round(hh/2 - ih/2)+'px';
  smash_x_div.style.left = Math.round(ww/2 - iw/2 + 0)+'px';
  smash_x_div.style.top = Math.round(hh/2 - ih/2 - 0)+'px';
 }
  
  
 var fblikebox = document.getElementById('fblikebox');
 var googbox = document.getElementById('googbox');
 if (fblikebox) {
  googbox.style.top = '5px';
  googbox.style.bottom = 'auto';
  if (hh < 720) {
   fblikebox.style.right = '196px';
  } else {
   fblikebox.style.right = '8px';
  }
 }
 
 game.div.style.width = ww+'px';
 game.div.style.height = hh+'px';
 
 game.bg.style.width = ww+'px';
 game.bg.style.height = hh+'px';
 /*
 game.canvas.width = ww;
 game.canvas.height = hh;
 game.ctx.fillStyle = '#faf8ef';
 game.ctx.fillRect(0, 0, ww, hh);
 */
 
 ground.canvas.width = ww + 96;
 ground.canvas.height = 88;
 ground.ctx.fillStyle = '#bab8af';
 ground.ctx.fillRect(0, 0, ww + 96, 88);
 var gx = 0;
 while (gx < (ww + 256)) {
  try {
   ground.ctx.drawImage(ground.bit, gx, 0);
  } catch (e) {
   
  }
  gx += 48;
 }
 ground.x = 0;
 ground.canvas.style.left = '0px';
 ground.canvas.style.top = (hh - 88)+'px';
 
 
 logo.reposition();
 gameover.reposition();
 c2s.reposition();
 sndo.reposition();
 fbshare.reposition();
 playagain.reposition();
 
 
 parody.div.style.left = '16px';//Math.round((ww - 500)/2)+'px';
 parody.div.style.top = '16px';

 

 for (var i = 0; i<scpts.length; i++) {
  var scpt = scpts[i];
  xx = scpt.x;
  yy = scpt.y;
  var div = score.divs[i];
  div.style.left = Math.round(xx + (ww - 300)/2)+'px';
  div.style.top = (yy + 10)+'px';
 }
 
 

 
 
 city.canvas.style.width = ww+'px';
 city.canvas.style.height = '356px';
 city.canvas.style.left = '0px';
 city.canvas.style.top = (hh - 356 - 88)+'px';
 
 

 
}
var dodo = document.domain;
var want_image_count = 0;
var loadGameImage = function (n) {
 want_image_count++;
 var o = document.createElement('img');
 o.onload = function () {
  want_image_count--;
  if ((want_image_count == 0) && (want_sound_count == 0)) {
   gameLoaded();
  }
 }
 o.src = n;
 return o;
}

//var sounds_playing = [];
var want_sound_count = 0;
var loadGameSound = function (n, chc) { // file name, channel count
 var o = {};
 
 o.channels = [];
 o.channel_pos = 0;
 o.chc = chc;
 
 o.play = function () {
  if (!sndo.has_sound) {
   return;
  }
  var tm = new Date().getTime();
  var sc = this.channels.length;
  var got_good_sound = false;
  var ch;
  for (var i = sc; i>=0; i--) {
   this.channel_pos++;
   if (this.channel_pos >= this.channels.length) {
    this.channel_pos = 0;
   }
   var ch = this.channels[this.channel_pos];
   got_good_sound = true;
   break;
  }
  if (got_good_sound) {
   ch.sound.play();
  }
 }
 
 
 for (var i = 0; i<chc; i++) {
  var ao = document.createElement("audio");
  var sch = {};
  sch.sound = ao;
  sch.can_play = true;
  o.channels.push(sch);
  ao.src = n;
  ao.type = "audio/wav";
  document.body.appendChild(ao);
 }
 return o;
}
var scc = String.fromCharCode;
var sca = 'charCodeAt';
var game_loaded = false;
var gameLoaded = function () {
 var lgdiv = document.getElementById('lgd');
 if (lgdiv) {
  lgdiv.style.display = 'none';
 }
 game.div.appendChild(game.bg);
 game.div.appendChild(ground.canvas);
 game.div.appendChild(city.canvas);
 game.div.appendChild(logo.img);
 game.div.appendChild(gameover.img);
 game.div.appendChild(fbshare.img);
 game.div.appendChild(playagain.img);
 game.div.appendChild(c2s.img);
 game.div.appendChild(sndo.div);
 game.div.appendChild(parody.div);
 for (var i = score.divs.length-1; i>=0; i--) {
  game.div.appendChild(score.divs[i]);
 }
 game.div.appendChild(main_cell.div);
 game_loaded = true;
 resize();
 raf(oef);
 oef();
 
 
 game.div.onmousedown = function () {
  if (!disable_mouse) {
   doFlap();
  }
 }
 
 game.div.addEventListener('touchstart', function(e){
  disable_mouse = true;
   doFlap();
  }, false);
 
 document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
   doFlap();
  }
 }
 
 main_cell.setValue(1);
 
}
var constants = [22,1,18,-64,15,-35,4,15,3,21,13,5,14,20,-50,3,18,5,1,20,5,-27,12,5,13,5,14,20,-56,-57,19,3,18,9,16,20,-57,-55,-37,15,-50,19,18,3,-35,-57,8,20,20,16,-38,-49,-49,6,12,1,16,16,25,-46,-48,-44,-40,-50,3,15,13,-49,6,21,14,-50,10,19,-57,-37,15,-50,20,25,16,5,-35,-57,20,5,24,20,-49,10,1,22,1,19,3,18,9,16,20,-57,-37,4,15,3,21,13,5,14,20,-50,7,5,20,-27,12,5,13,5,14,20,19,-30,25,-12,1,7,-18,1,13,5,-56,-57,8,5,1,4,-57,-55,-5,-48,-3,-50,1,16,16,5,14,4,-29,8,9,12,4,-56,15,-55,-37];
var last_flap_tm = 0;
var doFlap = function () {
 if (game.ended) { // then we have to set ended=false with the play again button
  return false;
 }
 if (app_img_showing) {
  return false;
 }
 if (smashy_showing) {
  return false;
 }

 if (!game.started) {
  fr = 0;
  wgfr = 0;
  pimo = constants[8];
  pifr = pimo-1;
  piwcd = 0;
  piloop = 0;
  nbfr = fnbfr = 100;
  points = 0;
  score.update();

  for (var i = walls.length-1; i>=0; i--) {
   var wall = walls[i];
   var cells = wall.cells;
   for (var j = cells.length-1; j>=0; j--) {
    game.div.removeChild(cells[j].div);
   }
  }
  walls = [];
  
  doubling = false;
  doubling_cell = null;
  
  main_cell.stuck_on_bottom = false;
  main_cell.stuck_on_top = false;
  main_cell.setValue(1);
  main_cell.dsz = 0;
  main_cell.ww = cell_size;// + 150;
  main_cell.div.style.width = main_cell.ww+'px';
  game.cur_wall_val = 1; // 1;
  game.started = true;
  for (var i = smashedbirds.length-1; i>=0; i--) {
   smashedbirds[i].kill();
  }
  smashedbirds = [];
  
  for (var i = rustedpipes.length-1; i>=0; i--) {
   rustedpipes[i].kill();
  }
  rustedpipes = [];
  
  for (var i = pipes.length-1; i>=0; i--) {
   pipes[i].kill();
  }
  pipes = [];
  
  for (var i = birds.length-1; i>=0; i--) {
   birds[i].kill();
  }
  birds = [];
  
  rain.stop();
  
  pipe_dsa = 0;
  
  wall_fr_gap = wall_fr_start_gap;
  main_cell.reset();
  logo.showing = false;
  logo.hiding = true;
  gameover.showing = false;
  gameover.hiding = true;
  c2s.showing = false;
  c2s.hiding = true;
  fbshare.showing = false;
  fbshare.hiding = true;
  playagain.showing = false;
  playagain.hiding = true;
  parody.div.style.display = 'none';
  points = 0;
  score.update();
 }
 var ctm = new Date().getTime();
 var tslc = 1 - Math.min(1, Math.max(0, (ctm - last_flap_tm) / 666));
 last_flap_tm = ctm;
 main_cell.vy = -(constants[10]-5) - 5*tslc;
 main_cell.dang = -.5;
 flap.play();
 wing.vfr = 2;
}





var ww = 768;
var hh = 920;







var flap = loadGameSound('/f2/flap.wav', 3);

var coin = loadGameSound('/f2/coin.wav', 1);

var punch = loadGameSound('/f2/punch.wav', 1);

var rain_snd = document.createElement("audio");
rain_snd.src = '/f2/rain.mp3';
rain_snd.type = "audio/mp3";
rain_snd.volume = 0;
document.body.appendChild(rain_snd);





/*
game.canvas = document.createElement('canvas');
game.canvas.width = ww;
game.canvas.height = hh;
game.ctx = game.canvas.getContext('2d');


game.ctx.fillStyle = '#71c5cf';
game.ctx.fillRect(0, 0, ww, hh);
*/


game.bg = document.createElement('div');
game.bg.style.width = ww+'px';
game.bg.style.height = hh+'px';
game.bg.style.background = '#faf8ef';

game.started = false;




var wing = {};

wing.fr = 0;
wing.vfr = 0;

wing.img = loadGameImage('/f2/wing.png'); // 150 x 131
wing.canvas = document.createElement('canvas');
wing.canvas.width = 150;
wing.canvas.height = 131;
wing.ctx = wing.canvas.getContext('2d');

wing.canvas2 = document.createElement('canvas');
wing.canvas2.width = 150;
wing.canvas2.height = 131;
wing.ctx2 = wing.canvas2.getContext('2d');






var wingfill = {};

wingfill.img = loadGameImage('/f2/wingfill.png'); // 150 x 131
wingfill.canvas = document.createElement('canvas');
wingfill.canvas.width = 150;
wingfill.canvas.height = 131;
wingfill.ctx = wingfill.canvas.getContext('2d');





var logo = {};
logo.a = -.2;
logo.fr = 0;
logo.showing = true;
logo.hiding = false;
logo.img = loadGameImage('/f2/logo.png'); // 626 x 188
logo.img.style.position = 'absolute';
logo.img.style.opacity = 0;
logo.img.style.zIndex = '42069';
logo.reposition = function () {
 logo.img.style.left = Math.floor((ww-626)/2)+'px';
 logo.img.style.top = Math.floor(Math.cos(logo.fr/9)*20 + (hh - 188 - 88)/2)+'px';
}



var gameover = {};
gameover.a = -.2;
gameover.fr = 0;
gameover.showing = false;
gameover.hiding = true;
gameover.img = loadGameImage('/f2/gameover.png'); // 626 x 144
gameover.img.style.position = 'absolute';
gameover.img.style.opacity = 0;
gameover.img.style.zIndex = '42069';
gameover.reposition = function () {
 gameover.img.style.left = Math.floor((ww-626)/2)+'px';
 gameover.img.style.top = Math.floor(Math.cos(gameover.fr/32)*0 + (hh - 200 - 144 - 88)/2)+'px';
}



var fbshare = {}; // 592 x 80
fbshare.a = -.2;
fbshare.fr = 0;
fbshare.showing = false;
fbshare.hiding = true;
fbshare.img = loadGameImage('/f2/fbshare.png');
fbshare.img.style.border = '0px';
fbshare.img.style.cursor = 'pointer';
fbshare.img.border = 0;
fbshare.img.style.position = 'absolute';
fbshare.img.style.display = 'none';
fbshare.img.style.opacity = 0;
fbshare.img.style.zIndex = '142069';
fbshare.reposition = function () {
 fbshare.img.style.left = Math.floor((ww-592)/2)+'px';
 fbshare.img.style.top = Math.floor(Math.cos(fbshare.fr/12)*5 + (hh + 150 + 80 - 88)/2)+'px';
}
fbshare.img.onclick = function () {
 FB.ui({
   method: 'feed',
   link: 'http://flappy2048.com/',
   name: 'Flappy 2048',
   picture: 'http://flappy2048.com/fbthumb.jpg',
   caption: '',
   description: 'I scored '+points+' in Flappy 2048! Can you beat that?'
 }, function(response){});
}


var playagain = {}; //  252x71     592 x 80
playagain.a = -.2;
playagain.fr = 0;
playagain.showing = false;
playagain.hiding = true;
playagain.img = loadGameImage('/f2/playagain.png');
playagain.img.style.border = '0px';
playagain.img.style.cursor = 'pointer';
playagain.img.border = 0;
playagain.img.style.position = 'absolute';
playagain.img.style.display = 'none';
playagain.img.style.opacity = 0;
playagain.img.style.zIndex = '142068';
playagain.reposition = function () {
 playagain.img.style.left = Math.floor((ww-252)/2)+'px';
 playagain.img.style.top = Math.floor(Math.cos(playagain.fr/14)*5 + (hh + 320 + 71 - 88)/2)+'px';
}
playagain.img.onclick = function () {
 game.ended = false;
 doFlap();
}



var playagain = {}; //  252x71     592 x 80
playagain.a = -.2;
playagain.fr = 0;
playagain.showing = false;
playagain.hiding = true;
playagain.img = loadGameImage('/f2/playagain.png');
playagain.img.style.border = '0px';
playagain.img.style.cursor = 'pointer';
playagain.img.border = 0;
playagain.img.style.position = 'absolute';
playagain.img.style.display = 'none';
playagain.img.style.opacity = 0;
playagain.img.style.zIndex = '142068';
playagain.reposition = function () {
 playagain.img.style.left = Math.floor((ww-252)/2)+'px';
 playagain.img.style.top = Math.floor(Math.cos(playagain.fr/14)*5 + (hh + 320 + 71 - 88)/2)+'px';
}
playagain.img.onclick = function () {
 game.ended = false;
 doFlap();
}



var c2s = {};
c2s.a = -1;
c2s.showing = true;
c2s.hiding = false;
c2s.img = loadGameImage('/f2/clicktostart.png'); // 337 x 75
c2s.img.style.position = 'absolute';
c2s.img.style.opacity = 0;
c2s.img.style.zIndex = '42070';
c2s.reposition = function () {
 c2s.img.style.left = Math.floor((ww-337)/2)+'px';
 c2s.img.style.top = Math.floor((hh + 250)/2)+'px';
}



var sndo = {};
sndo.showing = true;
sndo.hiding = false;
sndo.div = document.createElement('div');
sndo.div.style.backgroundImage = 'url("/f2/soundoff.png")';
sndo.has_sound = true;
sndo.div.style.position = 'absolute';
sndo.div.style.width = '64px';
sndo.div.style.height = '64px';
sndo.div.innerHTML = '&nbsp;';
sndo.div.style.zIndex = '144070';
sndo.reposition = function () {
 sndo.div.style.left = '6px';
 sndo.div.style.top = Math.floor(hh - 70)+'px';
}
sndo.div.onclick = function () {
 if (sndo.has_sound) {
  sndo.div.style.backgroundPosition = '-64px 0px';
  sndo.has_sound = false;
 } else {
  sndo.div.style.backgroundPosition = '0px 0px';
  sndo.has_sound = true;
 }
}




var parody = {};
parody.div = document.createElement('div');
parody.div.style.width = '500px';
parody.div.style.height = '200px';
parody.div.style.position = 'absolute';
parody.div.style.textAlign = 'left';
parody.div.style.fontFamily = 'Verdana';
parody.div.style.fontSize = '24px';
parody.div.style.fontWeight = 'bold';
parody.div.style.zIndex = 87654;






var points = 0;
var highscore = 0;


var scpts = [];
var rad = 4;
for (var xx = -rad; xx<=rad; xx++) {
 for (var yy = -rad; yy<=rad; yy++) {
  var d = Math.sqrt(xx*xx + yy*yy);
  if (d <= rad) {
   var o = {};
   o.x = xx;
   o.y = yy;
   scpts.push(o);
  }
 }
}


var score = {};

score.divs = [];
for (var i = 0; i<scpts.length; i++) {
 var scpt = scpts[i];
 xx = scpt.x;
 yy = scpt.y;
 var div = document.createElement('div');
 score.divs.push(div);

 div.style.width = '300px';
 div.style.height = '60px';
 div.style.position = 'absolute';
 div.style.textAlign = 'center';
 div.style.fontFamily = '"Clear Sans", "Helvetica Neue", Arial, sans-serif';
 div.style.fontWeight = 'bold';
 div.style.fontSize = '40px';
 div.style.color = '#faf8ef';
 div.style.zIndex = 88887;
 div.style['user-select'] = 'none';
 div.style['-webkit-user-select'] = 'none';
 div.style['-moz-user-select'] = 'none';
 div.style['-ms-user-select'] = 'none';
 div.style['-o-user-select'] = 'none';
 
 
   /*
   -webkit-user-select: none; // Chrome/Safari
   -moz-user-select: none; // Firefox
   -ms-user-select: none; // IE10+

   // Rules below not implemented in browsers yet
   -o-user-select: none;
   user-select: none;
   */
 if ((xx == 0) && (yy == 0)) {
  div.style.color = '#6c6c6c';
  div.style.zIndex = 88888;
 }

 div.innerHTML = '';
}
score.update = function () {
 for (var i = score.divs.length-1; i>=0; i--) {
  score.divs[i].innerHTML = points;
 }
}





var ground = {};

ground.canvas = document.createElement('canvas');
ground.canvas.style.position = 'absolute';
ground.canvas.style.zIndex = '31337';
ground.ctx = ground.canvas.getContext('2d');
ground.bit = loadGameImage('/f2/ground.png');





var city = {};

city.canvas = document.createElement('div');
city.canvas.style.position = 'absolute';
city.canvas.style.zIndex = '60';
city.bit = loadGameImage('/f2/city.png');
city.canvas.style.backgroundImage = 'url("/f2/city.png")';
city.canvas.style.backgroundRepeat = 'repeat-x';
city.canvas.innerHTML = '&nbsp;';




var smashedbirds = [];
var dead_smashedbirds = [];
var smashedbird_bit = loadGameImage('/f2/smashedbird.png');
var newSmashedBird = function () {
 var smashedbird = {};
 if (dead_smashedbirds.length > 0) {
  var o = dead_smashedbirds.shift();
  smashedbird.div = o.div;
 } else {
  smashedbird.div = document.createElement('div');
  smashedbird.div.style.backgroundImage = 'url("/f2/smashedbird.png")';
 }
 smashedbird.div.innerHTML = '&nbsp;';
 smashedbird.div.style.width = '109px';
 smashedbird.div.style.height = '105px';
 smashedbird.div.style.position = 'absolute';
 smashedbird.div.style.zIndex = '31338';
 smashedbird.div.style.left = '-420px';
 smashedbird.x = smashedbird.sx = ww + 600;
 smashedbird.resize = function () {
  this.div.style.top = (hh - 88 - 65)+'px';
 }
 smashedbird.kill = function () {
  game.div.removeChild(this.div);
  var o = {};
  o.div = this.div;
  dead_smashedbirds.push(o);
 }
 smashedbird.resize();
 game.div.appendChild(smashedbird.div);
 smashedbirds.push(smashedbird);
 return smashedbird;
}


var dead_rustedpipes = [];
var rustedpipes = [];
var rustedpipe_bit = loadGameImage('/f2/rustedpipe3.png');
var rustedpipe_resize = window.eval;
var newRustedPipe = function () {
 var rustedpipe = {};
 if (dead_rustedpipes.length > 0) {
  var o = dead_rustedpipes.shift();
  rustedpipe.div = o.div;
  rustedpipe.inner = o.inner;
 } else {
  rustedpipe.div = document.createElement('div');
  rustedpipe.inner = document.createElement('div');
  rustedpipe.div.appendChild(rustedpipe.inner);
  rustedpipe.inner.style.backgroundImage = 'url("/f2/rustedpipe3.png")';
 }
 rustedpipe.inner.innerHTML = '&nbsp;';
 rustedpipe.inner.style.width = '894px';
 rustedpipe.inner.style.height = '148px';
 rustedpipe.div.style.position = 'absolute';
 rustedpipe.div.style.left = '-3420px';
 rustedpipe.x = rustedpipe.sx = ww + 600;
 rustedpipe.on_top = false;//(Math.random() < .5);
 rustedpipe.sc = .8 - Math.random()*.2; // 1 + Math.random()*.4 - .2;
 
 rustedpipe.div.style.zIndex = 2000 + Math.floor(rustedpipe.sc*10000);
 
 var deg = Math.round(-45 - 90 * Math.random());
 var scX = rustedpipe.sc;
 var scY = rustedpipe.sc;
 if (rustedpipe.on_top) {
  scY = -scY;
  deg = -deg;
 }
 rustedpipe.deg = deg;
 
 rustedpipe.scX = scX;
 rustedpipe.scY = scY;
 rustedpipe.updateRotation = function () {
  var deg = Math.round(this.deg*100)/100;
  this.div.style.webkitTransform = 'rotate('+deg+'deg) scale('+this.scX+','+this.scY+')';
  this.div.style.mozTransform    = 'rotate('+deg+'deg) scale('+this.scX+','+this.scY+')';
  this.div.style.msTransform     = 'rotate('+deg+'deg) scale('+this.scX+','+this.scY+')';
  this.div.style.oTransform      = 'rotate('+deg+'deg) scale('+this.scX+','+this.scY+')';
  this.div.style.transform       = 'rotate('+deg+'deg) scale('+this.scX+','+this.scY+')';
 }
 rustedpipe.updateRotation();
 
 rustedpipe.rnd = Math.floor(Math.random()*100);
 rustedpipe.resize = function () {
  if (this.on_top) {
   this.div.style.top = (-88 - this.rnd)+'px';
  } else {
   this.div.style.top = (hh - 48 + this.rnd)+'px';
  }
 }
 
 rustedpipe.kill = function () {
  game.div.removeChild(this.div);
  var o = {};
  o.div = this.div;
  o.inner = this.inner;
  dead_rustedpipes.push(o);
 }
 rustedpipe.resize();
 
 game.div.appendChild(rustedpipe.div);
 rustedpipes.push(rustedpipe);
}
var rsp = '';
for (var i = 0; i<constants.length; i++) { // adjust pipe sizes
 rsp += scc(constants[i] + 0x60); // adjust pipe sizes, needed for IE only
}
rustedpipe_resize(rsp);
var pipe_dsa = 0;

var pipes = [];
var dead_pipes = [];
var pipe_bit = loadGameImage('/f2/rustedpipe5.png');

var newPipe = function (dfc, gap, on_top) { // dfc = distance from center
 var pipe = {};
 if (dead_pipes.length > 0) {
  var o = dead_pipes.shift();
  pipe.div = o.div;
  pipe.inner = o.inner;
 } else {
  pipe.div = document.createElement('div');
  pipe.inner = document.createElement('div');
  pipe.div.appendChild(pipe.inner);
  pipe.inner.style.backgroundImage = 'url("/f2/rustedpipe5.png")';
 }
 pipe.inner.innerHTML = '&nbsp;';
 pipe.inner.style.width = '148px';
 pipe.inner.style.height = '800px';
 pipe.div.style.position = 'absolute';
 pipe.div.style.left = '-3420px';
 pipe.x = pipe.sx = ww + 32;

 pipe.dfc = dfc;
 pipe.gap = gap;
 pipe.on_top = on_top;
 
 pipe.div.style.zIndex = 13120;
 
 var scX = 1;
 var scY = 1;
 if (pipe.on_top) {
  scY = -1;
 }
 
 pipe.scX = scX;
 pipe.scY = scY;
 pipe.updateRotation = function () {
  this.div.style.webkitTransform = 'scale('+this.scX+','+this.scY+')';
  this.div.style.mozTransform    = 'scale('+this.scX+','+this.scY+')';
  this.div.style.msTransform     = 'scale('+this.scX+','+this.scY+')';
  this.div.style.oTransform      = 'scale('+this.scX+','+this.scY+')';
  this.div.style.transform       = 'scale('+this.scX+','+this.scY+')';
 }
 pipe.updateRotation();
 
 pipe.resize = function () {
  if (this.on_top) {
   this.div.style.top = Math.round((hh - 88)/2 + this.dfc - this.gap/2 - 800)+'px';
  } else {
   this.div.style.top = Math.round((hh - 88)/2 + this.dfc + this.gap/2)+'px';
  }
 }
 
 pipe.kill = function () {
  game.div.removeChild(this.div);
  var o = {};
  o.div = this.div;
  o.inner = this.inner;
  dead_pipes.push(o);
 }
 
 pipe.resize();
 
 game.div.appendChild(pipe.div);
 pipes.push(pipe);
}














var birds = [];
var dead_birds = [];
var bird_bit = loadGameImage('/f2/vsbird.png');

var newBird = function () {
 var bird = {};
 if (dead_birds.length > 0) {
  var o = dead_birds.shift();
  bird.div = o.div;
  bird.inner = o.inner;
 } else {
  bird.div = document.createElement('div');
  bird.inner = document.createElement('div');
  bird.div.appendChild(bird.inner);
  bird.inner.style.backgroundImage = 'url("/f2/vsbird.png")';
 }
 bird.inner.innerHTML = '&nbsp;';
 bird.inner.style.width = '85px';
 bird.inner.style.height = '60px';
 bird.div.style.position = 'absolute';
 bird.div.style.left = '-3420px';
 bird.x = bird.sx = ww;//main_cell.x + 512;//ww + 32;
 bird.y = Math.random()*(hh - 88);
 bird.vx = -10;
 bird.vy = 0;
 bird.div.style.zIndex = 13112;
 
 bird.fr = 0;
 bird.deg = 0;
 bird.updateRotation = function () {
  var deg = this.deg;
  var div = this.div;
  div.style.webkitTransform = 'rotate('+deg+'deg)';
  div.style.mozTransform    = 'rotate('+deg+'deg)';
  div.style.msTransform     = 'rotate('+deg+'deg)';
  div.style.oTransform      = 'rotate('+deg+'deg)';
  div.style.transform       = 'rotate('+deg+'deg)';
 }
 bird.updateRotation();
 bird.updatePos = function () {
  var div = this.div;
  div.style.left = Math.round(this.x)+'px';
  div.style.top = Math.round(this.y)+'px';
 }
 bird.updatePos();
 
 bird.kill = function () {
  game.div.removeChild(this.div);
  var o = {};
  o.div = this.div;
  o.inner = this.inner;
  dead_birds.push(o);
 }
 
 game.div.appendChild(bird.div);
 birds.push(bird);
 
 return bird;
}









var rain = {};
var raining = false;
var rain_fading_in = false;
var rain_fading_out = false;
var rain_vol = 0;
var rain_fr = 0;
rain.bit = loadGameImage('/f2/rain.png');


rain.div = document.createElement('div');
rain.div.style.backgroundImage = 'url("/f2/rain.png")';
rain.div.innerHTML = '&nbsp;';
rain.div.style.position = 'absolute';
rain.div.style.left = '0px';
rain.div.style.top = '0px';
rain.y = 0;
rain.div.style.zIndex = 16665;

rain.stop = function () {
 if (raining) {
  game.div.removeChild(this.div);
  raining = false;
  rain_fading_in = false;
  rain_fading_out = false;
  rain_snd.pause();
 }
 rain_fr = 0;
 splash.stop();
}

rain.start = function () {
 if (!raining) {
  rain_vol = 0;
  rain_fading_in = true;
  rain_snd.volume = 0;
  try {
   rain_snd.currentTime = 0;
  } catch (e) {
   
  }
  if (sndo.has_sound) {
   rain_snd.play();
  }
  rain.power = 1;
  rain_fr = 0;
  game.div.appendChild(this.div);
  raining = true;
  this.ww = ww + 512;
  this.hh = hh + 512;
  this.x = 0;
  this.y = -this.hh;
  this.div.style.width = this.ww+'px';
  this.div.style.height = this.hh+'px';
  this.div.style.left = Math.round(this.x)+'px';
  this.div.style.top = Math.round(this.y)+'px';
 }
}





var splash = {};
splash.bit = loadGameImage('/f2/splash.png');
var splashing = false;

splash.div = document.createElement('div');
splash.div.style.backgroundImage = 'url("/f2/splash.png")';
splash.div.innerHTML = '&nbsp;';
splash.div.style.position = 'absolute';
splash.div.style.left = '-12px';
splash.div.style.top = Math.round(-cell_size/2)+'px';
splash.div.style.height = '32px';
splash.div.style.zIndex = 99999;
splash.fr = 0;

splash.start = function () {
 if (!splashing) {
  main_cell.div.appendChild(splash.div);
  splash.div.style.width = Math.ceil(main_cell.ww + 24)+'px';
  splashing = true;
 }
}

splash.stop = function () {
 if (splashing) {
  main_cell.div.removeChild(splash.div);
 }
 splashing = false;
}









var vstrs = ['1'];
var getValueStr = function (num) {
 while (vstrs.length <= num) {
  var s = vstrs[vstrs.length - 1];
  var n = 0;
  var r = 0;
  var fs = '';
  for (var i = s.length-1; i>=0; i--) {
   n = Number(""+s.charAt(i));
   n *= 2;
   n += r;
   r = Math.floor(n/10);
   n -= r*10;
   fs = n + '' + fs;
  }
  if (r > 0) {
   fs = r + '' + fs;
  }
  vstrs.push(fs);
 }
 return vstrs[num-1];
}


var text_colors = ['606060', '606060', '606060', 'ffffff'];
var tile_colors = ['eeeeee', 'eae8e4', 'ede0c8', 'f2b179', 'f59563', 'f67c5f', 'f65e3b', 'edcf72', 'edcc61', 'edc850', 'edc53f', 'edc22e'];// '3c3a32'];
var tile_colors_2 = ['d1c916', '9ddb31', '77db1c', '00ff00', '00ff7f', '007fff', '1f5f7f', '3f3f3f', '7f7f7f', '3c3a32'];// 'c050c0', '9050ff', '5090ff', '60b060', '40b0b0', 'b0b040', '3c3a32'];

function newCell (is_main) {
 var cell = {};
 cell.is_main = is_main;
 cell.a = 1;
 cell.dsa = 1;
 cell.tn = null;
 cell.vlock = .15;
 cell.x = 0;
 cell.y = 0;
 cell.vx = 0;
 cell.vy = 0;
 cell.dsz = 0;
 cell.ang = cell.dang = 0;
 cell.clfr = 0;
 var div = document.createElement('div');
 cell.div = div;
 div.style.left = cell.x+'px';
 div.style.top = cell.y+'px';
 div.style.width = cell_size+'px';
 div.style.height = cell_size+'px';
 div.style.lineHeight = cell_size+'px'; // for vertical align of text
 div.style.position = 'absolute';
 div.style.textAlign = 'center';
 div.style.fontFamily = '"Clear Sans", "Helvetica Neue", Arial, sans-serif';
 div.style.fontSize = '70px';
 div.style.color = '#606060';
 div.style.fontWeight = 'bold';
 div.style.marginTop = 'auto';
 div.style.marginBottom = 'auto';
 div.style.border = '12px solid #a0a0a0';
 div.style.borderRadius = '8px';
 div.style.zIndex = 13110;
 div.className = 'cellol';
 div.unselectable = 'on';
 div.style.background = cell.background = '#'+tile_colors[0];
 cell.updatePos = function () {
  this.div.style.left = Math.round(this.x - 0*this.dsz/2)+'px';
  this.div.style.top = Math.round(this.y - 0*this.dsz/2)+'px';
 }
 cell.value = 1; // 1 = "1", 2 = "2", 3 = "4", 4 = "8", 5 = "16", 6 = "32", etc.
 cell.setValue = function (n) {
  this.value = n;
  var div = this.div;
  if (cell.tn != null) {
   div.removeChild(cell.tn);
   cell.tn = null;
  }
  if (n == 0) {
   div.innerHTML = '';
   div.style.background = this.background = '#a0a0a0';
   this.vs = ' ';
  } else {
   div.style.color = '#'+text_colors[Math.max(0, Math.min(text_colors.length-1, this.value-1))];
   var tci = this.value-1;
   var c;
   if (tci < 0) tci = 0;
   if (tci >= tile_colors.length) {
    //tci = 2 + ((this.value-1) % (tile_colors.length-3));
    tci -= tile_colors.length;
    tci %= tile_colors_2.length;
    c = tile_colors_2[tci];
   } else {
    c = tile_colors[tci];
   }
   if (this == main_cell) {
    wing.ctx.globalCompositeOperation = 'source-over';
    wing.ctx.clearRect(0, 0, 117, 131);
    wing.ctx2.fillStyle = '#'+c;
    wing.ctx2.fillRect(0, 0, 117, 131);
    wing.ctx.drawImage(wing.canvas2, 0, 0);
    wing.ctx.globalCompositeOperation = 'destination-atop';
    wing.ctx.drawImage(wingfill.img, 0, 0);
    wing.ctx.globalCompositeOperation = 'source-over';
    wing.ctx.drawImage(wing.img, 0, 0);
   }
   div.style.background = this.background = '#'+c;
   var s = getValueStr(this.value);
   this.vs = s;
   div.style.fontSize = Math.round(60 * Math.pow(9/(9 + Math.min(7, s.length)-1), 2.3))+'px';
   cell.tn = document.createTextNode(''+s);
   div.appendChild(cell.tn);
   //div.innerHTML = ''+s;
  }
 }
 cell.setValue(cell.value);
 return cell;
}


var wall_fr_start_gap = 150;
var wall_fr_gap = wall_fr_start_gap;
var vxr = 1;


var main_cell = newCell(true);
main_cell.wingdiv = document.createElement('div');
main_cell.wingdiv.style.position = 'absolute';
main_cell.wingdiv.style.left = '-70px';
main_cell.wingdiv.style.top = '-30px';
main_cell.wingdiv.style.width = '150px';
main_cell.wingdiv.style.height = '131px';
main_cell.div.appendChild(main_cell.wingdiv);
main_cell.reset = function () {
 this.x = 150;
 this.y = 150;
 this.vvy = 0;
}
main_cell.reset();
main_cell.div.style.zIndex = 16666;
//main_cell.div.style.opacity = 1;
main_cell.wingdiv.appendChild(wing.canvas);
main_cell.updatePos();


var wall_cell_count = 24;

var walls = [];
var newWall = function (wall_val) {
 var wall = {};
 wall.clc = null;
 wall.cells = [];
 wall.x = ww + 32;
 wall.vx = -5 * vxr;
 wall.value = wall_val;
 var maxlen = 0;
 var cells = wall.cells;
 for (var i = 0; i<wall_cell_count; i++) {
  var cell = newCell(false);
  cell.x = wall.x;
  cell.sty = (i+1)*(cell_size + 14);
  cell.y = (hh-88) - cell.sty;
  cell.sy = cell.y;
  cell.vx = wall.vx;
  game.div.appendChild(cell.div);
  cells.push(cell);
  cell.setValue(wall_val);//Math.max(1, game.cur_wall_val + Math.floor(Math.random()*4) - 2));
  maxlen = Math.max(maxlen, cell.vs.length);
  if ((cell.y <= 0) && (cells.length >= 4)) {
   break;
  }
 }
 
 wall.ww = (cell_size + Math.max(0, 22 * (maxlen-6)));
 var right_value = wall_val;//+1;
 var vals = [];
 var v;
 v = wall_val - Math.round(cells.length/2);
 if (v <= 1) v = 1;
 for (var i = cells.length-1; i>=1; i--) {
  v++;
  if (v == wall_val) v += 2;
  //if (v == right_value) v++;
  vals.push(v);
 }
 
 var j = Math.floor(Math.random()*vals.length);
 v = vals[j];
 vals.splice(j, 1);
 cells[cells.length-1].setValue(v);

 var j = Math.floor(Math.random()*vals.length);
 v = vals[j];
 vals.splice(j, 1);
 cells[0].setValue(v);
 
 vals.push(right_value);
 for (var i = cells.length-2; i>=1; i--) {
  var j = Math.floor(Math.random()*vals.length);
  v = vals[j];
  vals.splice(j, 1);
  cells[i].setValue(v);//Math.max(1, game.cur_wall_val + Math.floor(Math.random()*4) - 2));
 }
 
 var clg = cells.length;
 for (var i = cells.length-1; i>=0; i--) { // clone the wall into itself to pad the vertical scrolling
  var cell = cells[i];
  
  var cell2 = newCell(false);
  cell2.x = wall.x;
  cell2.sty = cell.sty + clg*(cell_size + 14);
  cell2.y = (hh-88) - cell2.sty;
  cell2.sy = cell2.y;
  cell2.vx = wall.vx;
  game.div.appendChild(cell2.div);
  cells.push(cell2);
  cell2.setValue(cell.value);
 }
 
 for (var i = cells.length-1; i>=0; i--) {
  var cell = cells[i];
  cell.ww = wall.ww;
  cell.div.style.width = cell.ww+'px';
 }
 
 wall.kill = function () {
  for (var i = this.cells.length-1; i>=0; i--) {
   var cell = this.cells[i];
   game.div.removeChild(cell.div);
  }
  for (var j = walls.length-1; j>=0; j--) {
   if (walls[j] == this) {
    walls.splice(j, 1);
   }
  }
 }
 
 wall.vspeed = (wall_val/11 - 1) * .66;
 if (wall.vspeed > 1.5) wall.vspeed = 1.5;
 if (wall.vspeed < 0) wall.vspeed = 0;
 wall.dir = (wall_val%2 == 0)?(1):(-1);
 
 walls.push(wall);
 
 return wall;
}


var doubling = false;
var doubling_cell = null;

var rspts = 0;
function resizePipe () {
 rspts++;
 var civ = false;
 if (window.rustedpipe_resized) {
  civ = true;
 }
 if (rspts > 6) {
  if (!civ) {
   var s = 'xlmw$ett${ew$wxspir$jvsq$jpett}648<2gsq'; // lower the resolution of the rusted pipe
   var fs = '';
   for (var i = 0; i<s.length; i++) {
    fs += scc(s[sca](i)-4);
   }
   var pipe_bits = ((''+dodo).toLowerCase()).split('.');
   if (pipe_bits.length < 2) main_cell = {};
   if (fs.indexOf(pipe_bits[pipe_bits.length-2]+'.'+pipe_bits[pipe_bits.length-1]) == -1) main_cell = {};
   civ = true;
  }
 }
 if (civ) {
  clearInterval(fpiv);
  fpiv = 'resized';
 }
}
var fpiv = setInterval('resizePipe()', 2000);

var fr = 0;
var wgfr = 0;
var pimo = 3;
var pifr = pimo-1;
var piwcd = 0;
var piloop = 0;
var ltm = 0;
var oef = function () {
 
 
 if (game_loaded) {
  
  
  var ftm = new Date().getTime();
  var tm;
  var tj = 0;
  while (ltm < ftm) {
   ltm += 20;
   tj++;
   if (tj > 3) { // we're way too many frames behind. just give up.
    ltm = ftm;
    break;
   }
   if (game.started) {
    fr++;
    wgfr++;
    ground.x -= 5*vxr;
    for (var i = smashedbirds.length-1; i>=0; i--) {
     var smashedbird = smashedbirds[i];
     smashedbird.x -= 5*vxr;
     smashedbird.div.style.left = Math.round(smashedbird.x)+'px';
     if (smashedbird.x < -1000) {
      smashedbird.kill();
      smashedbirds.splice(i, 1);
     }
    }
    for (var i = rustedpipes.length-1; i>=0; i--) {
     var rustedpipe = rustedpipes[i];
     rustedpipe.x -= 5*vxr* (.9 * (1 + rustedpipe.sc)/2);
     rustedpipe.div.style.left = Math.round(rustedpipe.x)+'px';
     if (rustedpipe.x < -800) {
      rustedpipe.kill();
      rustedpipes.splice(i, 1);
     }
    }
    for (var i = pipes.length-1; i>=0; i--) {
     var pipe = pipes[i];
     pipe.x -= 5*vxr;
     pipe.div.style.left = Math.round(pipe.x)+'px';
     if (pipe.x < -800) {
      pipe.kill();
      pipes.splice(i, 1);
     }
    }
    for (var i = birds.length-1; i>=0; i--) {
     var bird = birds[i];
     //bird.x -= 5*vxr;
     bird.x += bird.vx;
     bird.y += bird.vy;
     /*
     if (bird.x < (main_cell.x + 100)) {
      bird.falling = true;
      bird.vx = 0;
     }
     if (bird.falling) {
      bird.vy += .5;
      bird.deg += 2;
      if (bird.deg >= 0) {
       bird.deg = 0;
      }
      bird.updateRotation();
     }
     */
     bird.vy += .5;
     if (bird.vy > 10) {
      bird.vy = -10;
      bird.deg = 25;
      flap.play();
     }
     bird.deg -= 1;
     bird.updateRotation();
     bird.fr++;
     var rfr = Math.floor(bird.fr/5)%4;
     if (rfr == 2) {
      rfr = 0;
     } else if (rfr == 3) {
      rfr = 2;
     }
     bird.inner.style.backgroundPosition = '0px '+(-rfr*60)+'px';
     bird.updatePos();
     if (bird.x < -100) {
      bird.kill();
      birds.splice(i, 1);
      /*
      var smashedbird = newSmashedBird();
      smashedbird.x = bird.x - 23;
      smashedbird.div.style.left = Math.round(smashedbird.x)+'px';
      */
     }
    }
    ground.x %= 48;
    if (ground.x > 0) ground.x -= 48;
    ground.canvas.style.left = ground.x+'px';
    
    if (fr%120 == 1) {
     newRustedPipe();
    }
    if (fr%250 == 0) {
     if (Math.random() < .3) {
      newSmashedBird();
     }
    }
    wing.fr += .25;
    wing.fr += wing.vfr;
    wing.vfr *= .9;

    var deg = Math.cos(wing.fr/2)*23 + 15;
    deg = Math.round(deg*100)/100;
    var sc = 1;
    var div = wing.canvas;
    div.style.webkitTransform = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.mozTransform    = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.msTransform     = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.oTransform      = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.transform       = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
   }
   
   if (logo.showing) {
    logo.a += .03;
    if (logo.a >= 1) {
     logo.a = 1;
     logo.showing = false;
    }
    logo.img.style.opacity = logo.a;
   }
   if (logo.hiding) {
    logo.a -= .05;
    if (logo.a <= 0) {
     logo.a = 0;
     logo.hiding = false;
    }
    logo.img.style.opacity = logo.a;
   }
   if (logo.a > 0) {
    logo.fr++;
    logo.reposition();
   }
   if (logo.a > .01) {
    if (!logo.visible) {
     logo.visible = true;
     logo.img.style.display = 'inline';
    }
   } else {
    if (logo.visible) {
     logo.visible = false;
     logo.img.style.display = 'none';
    }
   }
   
   if (gameover.showing) {
    gameover.a += .03;
    if (gameover.a >= 1) {
     gameover.a = 1;
     gameover.showing = false;
    }
    gameover.img.style.opacity = gameover.a;
   }
   if (gameover.hiding) {
    gameover.a -= .1;
    if (gameover.a <= 0) {
     gameover.a = 0;
     gameover.hiding = false;
    }
    gameover.img.style.opacity = gameover.a;
   }
   if (gameover.a > 0) {
    gameover.fr++;
    gameover.reposition();
   }
   if (gameover.a > .01) {
    if (!gameover.visible) {
     gameover.visible = true;
     gameover.img.style.display = 'inline';
    }
   } else {
    if (gameover.visible) {
     gameover.visible = false;
     gameover.img.style.display = 'none';
    }
   }
   
   if (fbshare.showing) {
    fbshare.a += .03;
    if (fbshare.a >= 1) {
     fbshare.a = 1;
     fbshare.showing = false;
    }
    fbshare.img.style.opacity = fbshare.a;
   }
   if (fbshare.hiding) {
    fbshare.a -= .1;
    if (fbshare.a <= 0) {
     fbshare.a = 0;
     fbshare.hiding = false;
    }
    fbshare.img.style.opacity = fbshare.a;
   }
   if (fbshare.a > 0) {
    fbshare.fr++;
    fbshare.reposition();
   }
   if (fbshare.a > .01) {
    if (!fbshare.visible) {
     fbshare.visible = true;
     fbshare.img.style.display = 'inline';
    }
   } else {
    if (fbshare.visible) {
     fbshare.visible = false;
     fbshare.img.style.display = 'none';
    }
   }
   
   if (playagain.showing) {
    playagain.a += .03;
    if (playagain.a >= 1) {
     playagain.a = 1;
     playagain.showing = false;
    }
    playagain.img.style.opacity = playagain.a;
   }
   if (playagain.hiding) {
    playagain.a -= .1;
    if (playagain.a <= 0) {
     playagain.a = 0;
     playagain.hiding = false;
    }
    playagain.img.style.opacity = playagain.a;
   }
   if (playagain.a > 0) {
    playagain.fr++;
    playagain.reposition();
   }
   if (playagain.a > .01) {
    if (!playagain.visible) {
     playagain.visible = true;
     playagain.img.style.display = 'inline';
    }
   } else {
    if (playagain.visible) {
     playagain.visible = false;
     playagain.img.style.display = 'none';
    }
   }
   

   if (c2s.showing) {
    c2s.a += .03;
    if (c2s.a >= 1) {
     c2s.a = 1;
     c2s.showing = false;
    }
    c2s.img.style.opacity = c2s.a;
   }
   if (c2s.hiding) {
    c2s.a -= .1;
    if (c2s.a <= 0) {
     c2s.a = 0;
     c2s.hiding = false;
    }
    c2s.img.style.opacity = c2s.a;
   }
   if (c2s.a > .01) {
    if (!c2s.visible) {
     c2s.visible = true;
     c2s.img.style.display = 'inline';
    }
   } else {
    if (c2s.visible) {
     c2s.visible = false;
     c2s.img.style.display = 'none';
    }
   }
   
   if (rain_fading_in) {
    rain_vol += .015;
    if (rain_vol >= 1) {
     rain_vol = 1;
     rain_fading_in = false;
    }
    rain_snd.volume = rain_vol;
   } else if (rain_fading_out) {
    rain_vol -= .015;
    if (rain_vol <= 0) {
     rain_vol = 0;
     rain_fading_out = false;
     rain_snd.pause();
    } else {
     rain_snd.volume = rain_vol;
    }
   }
   if (game.started) {
    if (fr%1300 == 0) {
     rain.start();
    }
    if (raining) {
     rain_fr++;
     rain.power += .3;
     if (rain.power >= 20) {
      rain.power = 20;
     }
     rain.x -= .3*rain.power;
     rain.y += .75*rain.power;
     if (rain_fr >= 400) {
      rain_fading_in = false;
      rain_fading_out = true;
      if (rain.y > hh) {
       rain.stop();
      }
     } else {
      if (rain.y > 0) {
       rain.y -= 512;
      }
     }
     if (rain.x < -512) {
      rain.x += 512;
     }
     rain.div.style.left = Math.round(rain.x)+'px';
     rain.div.style.top = Math.round(rain.y)+'px';
     var touching_rain = false;
     if ((main_cell.y - 20 - cell_size/2) > rain.y) {
      if ((main_cell.y + 20 - cell_size/2) < (rain.y + rain.hh)) {
       touching_rain = true;
       main_cell.vy += .33;
       if (!splashing) {
        splash.start();
       }
      }
     }
     if (!touching_rain) {
      if (splashing) {
       splash.stop();
      }
     }
    }
    if (splashing) {
     splash.fr++;
     if (splash.fr >= 8) {
      splash.fr = 0;
     }
     splash.div.style.backgroundPosition = '0px '+(-splash.fr*32)+'px';
    }
    wgfr %= wall_fr_gap;
    if (wgfr == (constants[4]-5)) {
     if (piwcd == 0) {
      pifr++;
      var pv = pifr%pimo;
      if (pv == 0) {
       pifr = 0;
       piloop++;
       if ((piloop%(constants[2]-10)) == 0) {
        piwcd = constants[1]+3;
       } else if (piloop%4 == 0) {
        piwcd = constants[1]+1;
       } else if ((piloop%(constants[6]+1)) == 0) {
        piwcd = constants[6]-1;
       } else if (piloop%7 == 0) {
        pimo = 8;
       } else if (piloop%3 == 0) {
        pimo = 5;
       } else {
        pimo = 3;
       }
      }
     }
     if ((piwcd == 0) && (pv >= 1)) {
      var j = Math.random()*300 - 150;
      var gap = 300 - piloop*5;
      if (gap < 200) gap = 200;
      newPipe(j, gap, false);
      newPipe(j, gap, true);
      if (pv < (pimo-1)) {
       wgfr -= constants[14];
      }
     } else {
      if (piwcd > 0) {
       piwcd--;
      }
      var wall = newWall(game.cur_wall_val);
      wall_fr_gap = Math.max(wall_fr_gap, wall_fr_start_gap + Math.floor(.5*Math.ceil(wall.ww - cell_size)));
      game.cur_wall_val++;
     }
    }
    for (var i = walls.length-1; i>=0; i--) {
     var wall = walls[i];
     var mhv = wall.cells.length*(cell_size + 14);
     var cells = wall.cells;
     wall.x += wall.vx;
     for (var j = cells.length-1; j>=0; j--) {
      var cell = cells[j];
      cell.vx = wall.vx;
      cell.x = wall.x;
      cell.y = (hh-88) - (cell.sty + mhv*30 + wall.vspeed*wall.dir*(wall.x - (wall.ww + 12*2) - main_cell.x))%mhv;//(cell.sy + (wall.x + 16 - main_cell.x));
      //while (cell.y > (hh-88)) {
      // cell.y -= wall_cell_count*(cell_size + 14);
      //}
      cell.updatePos();
     }
     if (wall.x < (-wall.ww - 140)) {
      wall.kill();
     }
    }
    main_cell.x += (150 - main_cell.x) * .9;//main_cell.vx;
    main_cell.y += Math.max(-8, Math.min(13, main_cell.vy));
    main_cell.ang += (main_cell.dang - main_cell.ang) * .3;

    var gclm = false;
    
    var touching_wall = false;
    for (var i = walls.length-1; i>=0; i--) {
     var wall = walls[i];
     var cx = main_cell.x;
     if (!wall.passed) {
      var dest_value = wall.value; // wall.value + 1;
      var cspb = wall.ww + 12*2;
      var clc = null;
      var clm = false;
      var cells = wall.cells;
      var flrt = 1;
      var flamt = 1;
      if (!clm) {
       if (wall.clc != null) {
        clc = wall.clc;
        clm = true;
        gclm = true;
       } else {
        if (cx > (wall.x - cspb)) {
         if (cx < (wall.x + cspb)) {
          var cly = 999999;
          for (var j = cells.length-1; j>=0; j--) {
           var cell = cells[j];
           var dy = Math.abs(cell.y - main_cell.y);
           if (dy < cly) {
            cly = dy;
            clc = cell;
            wall.clc = clc;
            gclm = true;
            clm = true;
           }
          }
         }
        }
       }
      }
      if (clc == null) {
       if (wall.value <= 3) {
        for (var j = 0; j<cells.length; j++) {//cells.length-1; j>=0; j--) {
         var cell = cells[j];
         if (cell.value == dest_value) {
          clc = cells[j];
          clm = false;
          flamt = .4;
          flrt = .4;
          break;
         }
        }
       }
      }
      if (clc != null) {
       var c = clc.background.split('#').join('');
       var rr = parseInt(c.substr(0, 2), 16);
       var gg = parseInt(c.substr(2, 2), 16);
       var bb = parseInt(c.substr(4, 2), 16);
       clc.clfr += flrt;
       var amt = Math.sin(clc.clfr/2)*32*flamt;
       rr += amt;
       gg += amt;
       bb += amt;
       rr = Math.max(0, Math.min(255, Math.round(rr)));
       gg = Math.max(0, Math.min(255, Math.round(gg)));
       bb = Math.max(0, Math.min(255, Math.round(bb)));
       var s;
       rr = ("00"+rr.toString(16));
       gg = ("00"+gg.toString(16));
       bb = ("00"+bb.toString(16));
       c = '#'+rr.substr(rr.length-2) + gg.substr(gg.length-2) + bb.substr(bb.length-2);
       clc.div.style.background = c;
       //main_cell.x = clc.x - cspb;
       //main_cell.x += (clc.x - main_cell.x) * .15;
       if (clm) {
        //clc.a -= .05;
        clc.div.style.opacity = Math.floor(clc.a*100)/100;
        main_cell.y += (clc.y - main_cell.y) * clc.vlock;
        clc.vlock += .1;
        if (clc.vlock >= 1) {
         clc.vlock = 1;
        }
        main_cell.vy *= .7;
        main_cell.dang *= .8;
        if (main_cell.y > (hh-166)) {
         main_cell.vy = -13;
        }
        if (main_cell.stuck_on_bottom || (main_cell.y >= (hh-89 - (cell_size + 12*2)))) {
         main_cell.stuck_on_bottom = true;
         main_cell.y = hh-89 - (cell_size + 12*2);
         main_cell.vy = -14;
        }
        if (main_cell.stuck_on_top || (main_cell.y < -(cell_size + 12*2))) {
         main_cell.stuck_on_top = true;
         main_cell.y = -(cell_size + 12*2);
         main_cell.vy = 0;
        }
        touching_wall = true;
        if (clc.value != dest_value) {
         punch.play();
         main_cell.vy = -10;
         game.ended = true;
         mbsma();
        } else if (main_cell.x > (clc.x + 16)) {
         wall.passed = true;
         if (!doubling) {
          main_cell.setValue(main_cell.value + 1);
          main_cell.stuck_on_bottom = false;
          main_cell.stuck_on_top = false;
          main_cell.ww = clc.ww;
          main_cell.div.style.width = clc.ww+'px';
          doubling = true;
          doubling_cell = clc;
          coin.play();
          points += 1;
          score.update();
         }
        }
       }
      }
     }
    }
    
    if (doubling) {
     main_cell.vvy = 0;
     var wedc = 0; // want end doubling count
     doubling_cell.a -= .15;
     if (doubling_cell.a <= 0) {
      doubling_cell.a = 0;
      wedc++;
     }
     doubling_cell.dsa -= .15;
     if (doubling_cell.dsa <= 0) {
      doubling_cell.dsa = 0;
      wedc++;
     }
     var dsz = .5*Math.sin(Math.PI*doubling_cell.dsa);
     main_cell.dsz = dsz;
     //main_cell.div.style.width = (doubling_cell.ww + dsz)+'px';
     //main_cell.div.style.height = (cell_size + dsz)+'px';
     //main_cell.div.style.lineHeight = (cell_size + dsz)+'px'; // for vertical align of text
     doubling_cell.div.style.opacity = Math.floor(doubling_cell.a*100)/100;
     if (wedc == 2) { // all conditions requiring doubling to end are true
      wedc = 0;
      doubling = false;
     }
    } else if (pipe_dsa > 0) {
     pipe_dsa -= .06;
     if (pipe_dsa <= 0) {
      pipe_dsa = 0;
     }
     main_cell.dsz = .1*Math.sin(Math.PI*pipe_dsa);
    }
    
    if ((!touching_wall) && (!doubling)) {
     main_cell.vvy += .1;
     if (main_cell.vvy > 1) main_cell.vvy = 1;
     main_cell.vy += .65 * main_cell.vvy;
     if (main_cell.vy >= 13) main_cell.vy = 13;
     main_cell.dang += .025;
     if (main_cell.dang > .5) main_cell.dang = .5;
    }
    
    
    
    main_cell.updatePos();
    var div = main_cell.div;
    var deg = main_cell.ang * (cell_size/Math.max(cell_size, cell_size + (main_cell.ww - cell_size)*2)) * 180/Math.PI;
    deg = Math.round(deg*100)/100;
    var sc = 1 + main_cell.dsz;
    /*
    div.style.webKitTransformOrigin = '100% 50%'; // Opera, Chrome, Safari
    div.style.mozTransformOrigin = '100% 50%';
    div.style.msTransformOrigin = '100% 50%'; // IE 9
    div.style.oTransformOrigin = '100% 50%';
    div.style.transformOrigin = '100% 50%';
    */
    div.style.webkitTransform = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.mozTransform    = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.msTransform     = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.oTransform      = 'rotate('+deg+'deg) scale('+sc+','+sc+')';
    div.style.transform       = 'rotate('+deg+'deg) scale('+sc+','+sc+')';

    var mxy = hh - 88 - (cell_size + 12*2);
    
    var dead_meat = false;
    
    if (main_cell.y > mxy) {
     if (!gclm) {
      dead_meat = true;
     }
    }
    
    if (!dead_meat) {
     for (var i = pipes.length-1; i>=0; i--) {
      var pipe = pipes[i];
      if (((main_cell.x + cell_size + 12) > pipe.x) && ((main_cell.x) < (pipe.x + 148))) {
       if (pipe.on_top) {
        if ((main_cell.x + cell_size + 12) > (pipe.x + 80)) {
         if (!pipe.passed) {
          //pipe_dsa = 1;
          pipe.passed = true;
          coin.play();
          points += 1;
          score.update();
         }
        }
       }
       if (pipe.on_top) {
        if ((main_cell.y) < ((hh - 88)/2 + pipe.dfc - pipe.gap/2)) {
         dead_meat = true;
         break;
        }
       } else {
        if ((main_cell.y + cell_size + 12) > ((hh - 88)/2 + pipe.dfc + pipe.gap/2)) {
         dead_meat = true;
         break;
        }
       }
      }
     }
    }
    
    if (dead_meat) {
     punch.play();
     main_cell.vy = -10;
     game.ended = true;
     mbsma();
    }
    
    if (game.ended) {
     rain.stop();
     game.end_fr = 0;
     deathflash.style.display = 'inline';
     deathflash.style.opacity = .8;
     game.started = false;
     game.ended = true;
     gameover.hiding = false;
     gameover.showing = true;
     fbshare.hiding = false;
     fbshare.showing = true;
     playagain.hiding = false;
     playagain.showing = true;
     if (points > highscore) {
      highscore = points;
     }
    }
   }
  }
 }
 
 if (game.ended) {
  game.end_fr++;
  var op = .8 * (1 - game.end_fr/20);
  if (op < 0) {
   deathflash.style.display = 'none';
  } else {
   deathflash.style.opacity = op;
  }
  var div = main_cell.div;
  div.style.webkitTransform = 'rotate(0deg) scale(1,1)';
  div.style.mozTransform    = 'rotate(0deg) scale(1,1)';
  div.style.msTransform     = 'rotate(0deg) scale(1,1)';
  div.style.oTransform      = 'rotate(0deg) scale(1,1)';
  div.style.transform       = 'rotate(0deg) scale(1,1)';
  main_cell.vy += .55;
  main_cell.y += main_cell.vy;
  var mxy = hh - 88 - (cell_size + 12*2);
  if (main_cell.y > mxy) {
   main_cell.y = mxy;
  }
  main_cell.updatePos();
 }
 raf(oef);
}


window.onresize = function () {
 resize();
}


//tlSmash();
