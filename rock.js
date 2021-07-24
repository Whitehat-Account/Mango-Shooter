class stone {
  constructor(x, y, r) {
    var stoneOptions = {
      'isStatic':false,
      'restitution':0.5,
      'friction':1,
      'density':1.2
    }
    this.x=x;
		this.y=y;
		this.r=r;
    this.body = Bodies.rectangle(x, y, 40, 40, stoneOptions);
    this.image = loadImage("images/stone.png");
    this.width = 40;
    this.height = 40;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, 40, 40);
    pop();
  }
}