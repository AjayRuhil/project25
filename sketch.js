const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var dustbinback;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);

	
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);
	dustbinback=new Dust(1100,510,240,200);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  
  groundObject.display();
 
  dustbinback.display();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});


  
	}

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-80,y:-270});
  
  
	
	  }

}
