
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine
var world;
//var myground;
function preload()
{
	
}

function setup() {

  createCanvas(1200,700);
	engine = Engine.create();
	world = engine.world;
   
  var ball_options={  
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
   
  }
	//Create the Bodies Here.
  ball = Bodies.circle(500,100,20,ball_options);
  World.add(world,ball);
  myground = new ground(width/2,670,width,20);
  leftside = new ground( 1100,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  // Engine.update(engine);
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("CRUMPLED PAPER BALLS", width / 2, 100);
  ellipse(ball.position.x,ball.position.y,2*20);
  myground.display();
  leftside.display();
  drawSprites();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
	}
}


