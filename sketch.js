const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeimg, boy, boyimg, bground, pebble, rubber;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15;

function preload() {
  treeimg = loadImage("images/tree.png");
  boyimg = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1100,600);
  tree = createSprite(800, 300);
  tree.addImage(treeimg);
  tree.scale = 0.7;

  boy = createSprite(250, 525);
  boy.addImage(boyimg);
  boy.scale = 0.1;

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  bground = new ground(width/2, 580, 1500, 10);
  box1 = new ground(800,575,400,10);//800,575,400,10
	box2 = new ground(595,530,10,100);
	box3 = new ground(1005,530,10,100);

  mango1 =  new mango(950, 255, 20, 20);
  mango2 =  new mango(935, 205, 20, 20);
  mango3 =  new mango(905, 165, 20, 20);
  mango4 =  new mango(870, 200, 20, 20);
  mango5 =  new mango(865, 245, 20, 20);  
  mango6 =  new mango(860, 100, 20, 20);
  mango7 =  new mango(860, 125, 20, 20);
  mango8 =  new mango(815, 160, 20, 20);
  mango9 =  new mango(755, 185, 20, 20);
  mango10 =  new mango(700, 230, 20, 20);
  mango11 =  new mango(705, 250, 20, 20);
  mango12 =  new mango(700, 190, 20, 20);
  mango13 =  new mango(740, 85, 20, 20);
  mango14 =  new mango(780, 190, 20, 20);
  mango15 =  new mango(840, 140, 20, 20);

  // pebble = new stone(200, 465);
  pebble = new stone(235,420,30);
  rubber = new band(pebble.body, {x:200, y:465});
}


function draw() {
  background(0, 162, 232);
  textSize(30);
  fill(0);
  text("Press SPACE BAR for another try" ,50 ,50);
  drawSprites();

  bground.display();
  box1.display();
  box2.display();
  box3.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  pebble.display();
  rubber.display();
  detectCollision(pebble, mango1);
  detectCollision(pebble, mango2);
  detectCollision(pebble, mango3);
  detectCollision(pebble, mango4);
  detectCollision(pebble, mango5);
  detectCollision(pebble, mango6);
  detectCollision(pebble, mango7);
  detectCollision(pebble, mango8);
  detectCollision(pebble, mango9);
  detectCollision(pebble, mango10);
  detectCollision(pebble, mango11);
  detectCollision(pebble, mango12);
  detectCollision(pebble, mango13);
  detectCollision(pebble, mango14);
  detectCollision(pebble, mango15);
}


function mouseDragged(){
  Matter.Body.setPosition(pebble.body, {x:mouseX , y:mouseY});
}
function mouseReleased(){
  rubber.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(pebble.body, {x:200, y:465});
    rubber.attach(pebble.body);
  }
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  pebbleBodyPosition = lstone.body.position;

  var distance = dist(pebbleBodyPosition.x, pebbleBodyPosition.y
    , mangoBodyPosition.x, mangoBodyPosition.y);
  if (distance <= lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }
}