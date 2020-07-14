
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dustbin1,dustbin2,dustbin3;
var packageBody,grnd,ppr,wire;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new dust(510,384.5,60,10);
	dustbin2 = new dust(466,350,10,60);
	dustbin3 = new dust(555,350,10,60);
	grnd = new ground(300,400,800,20);
  ppr = new paper(100,100,33);
  wire = new slingShot(ppr.body,{x:200,y:200});

	
  
}


function draw() {
 
  background("grey") ;
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  grnd.display();
  ppr.display();
  wire.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ppr.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	wire.fly();
}
