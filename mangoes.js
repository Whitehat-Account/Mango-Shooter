class mango {
  constructor(x, y, r) {
    var mangoOptions = {
      isStatic:true,
      restitution:0.1,
      friction:1,
      density:1.2
    }
    this.x=x;
		this.y=y;
		this.r=r;
    this.body = Bodies.circle(x, y, this.r, mangoOptions);
    this.image = loadImage("images/mango.png");
    // this.width = 20;
    // this.height = 25;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
  }
}