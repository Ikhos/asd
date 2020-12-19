
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone;
var boy, boyIMG, sling;
var m1, m2, m3, m4, m5;


function preload() {
	boyIMG = loadImage("image/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(400, 150);
	boy = createSprite(150, 275);
	boy.addImage(boyIMG);
	stone = new Stone(50, 200);
	sling = new Chain({x:50, y:200}, stone.body);
	m1 = new Mango(600, 200);
	m2 = new Mango(500, 230);
	m3 = new Mango(490, 300);
	m4 = new Mango(550, 250);
	m5 = new Mango(629, 277);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  tree.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  
  if(m1.x === stone.x || m1.y === stone.y){
	m1.y = m1.y - 10;
  }
  if(m2.x === stone.x || m2.y === stone.y){
	m2.y = m1.y - 10;
  }
  if(m3.x === stone.x || m3.y === stone.y){
	m3.y = m1.y - 10;
  }
  if(m4.x === stone.x || m4.y === stone.y){
	m4.y = m1.y - 10;
  }
  if(m5.x === stone.x || m5.y === stone.y){
	m5.y = m1.y - 10;
  }
  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


