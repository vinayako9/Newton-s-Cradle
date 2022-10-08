
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,chain,chain2,chain3,chain4,chain5,roof

//function preload()
//(

//)


function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(400,250,230,20);
	bob1 = new bob(350,500,50)
	bob2 = new bob(400,400,50)
	bob3 = new bob(450,400,50)
	bob4 = new bob(500,400,50)
	bob5 = new bob(550,400,50)
	chain=new chain(bob1.body,roofObject.body,-80)
	chain2=new chain(bob2.body,roofObject.body,-40)
	chain3=new chain(bob3.body,roofObject.body,0)
	chain4=new chain(bob4.body,roofObject.body,40)
	chain5=new chain(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
   Matter.body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
	}
}


