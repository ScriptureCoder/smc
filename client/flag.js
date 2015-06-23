var Flag = function(position, ctx){
  this.position = {x: position.x, y: position.y};
  this.radius = 2;
  this.player = null;
  this.ctx = ctx;
  this.poleColor = "black";
  this.flagColor = "red";
  this.animator = new ObjectAnimator(1000);
  this.dropped = false;
};

Flag.prototype.capturedByPlayer = function(player){
  player.hasFlag = true;
  this.player = player;
};

Flag.prototype.drop = function(){
  this.player = null;
  this.dropped = true;
  this.dropTimer();

};

Flag.prototype.dropTimer = function(){
  context = this;
  setTimeout(function(){
    context.dropped = false;
  }, 2000)
};

Flag.prototype.update = function(){
  if(this.player){
    this.position.x = this.player.position.x; //change it to "x" for circle
    this.position.y = this.player.position.y; //change it to "y" for circle
  };
};


Flag.prototype.draw = function(){
  // Drawing the flag pole
  this.ctx.fillStyle = this.poleColor; // Set color
  this.ctx.fillRect(this.position.x, this.position.y-20, 5, 20); // Draw the rectangle (pole)

  // Drawing the flag
  this.ctx.fillStyle = this.flagColor; // Set color
  var path = new Path2D(); // Draw triangle
    path.lineTo(this.position.x + 5, this.position.y - 20);
    path.lineTo(this.position.x + 15, this.position.y - 15);
    path.lineTo(this.position.x + 5, this.position.y - 10);
  this.ctx.fill(path);
};

Flag.prototype.animate = function(){

};