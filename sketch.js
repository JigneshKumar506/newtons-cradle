
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const contraint = Matter.constraint ;

var ground ;
var rope ;
var bob ;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground = createSprite (350,200,400,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display ();
  
}



