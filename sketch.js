
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
    color: "red",
    restitution: 0.9
  }
	//Create the Bodies Here.
  ball = Bodies.circle(500,100,100,ball_options);
  World.add(world,ball);
  myground = new ground(width/2,670,width,20);
  leftside = new ground( 1100,600,20,120);
	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("CRUMPLED PAPER BALLS", width / 2, 100);
  ellipse(ball.position.x,ball.position.y,20);
  myground.display();
  leftside.display();
  drawSprites();
  Engine.update(engine);
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}


