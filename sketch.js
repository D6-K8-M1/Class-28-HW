
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var stone
var tree
var mango
var slingshot
function preload()
{
	stone.loadImage("stone.png");
	mango.loadImage("mango.png");
	tree.loadImage("tree.png");
	mango.loadImage("mango.png");



	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(width/2,670, width, 20);  
	mango = new Mango(200,40,10,10);
	tree = new Tree(400, 200, 10, 75);
	stone = new Stone(100, 300, 10,10);
	slingshot=new SlingShot(stone.body(x:200, y:100));
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  mango.display();
  tree.display();
  stone.display();
  slingshot.display();

 
}






function keyPressed() {

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(stone.body, stone.body.position,{x:130, y:-145});
	
}

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body. (x:mouseX, y:mouseY));
}

function mouseFly(){
	slingshot.fly();
}



