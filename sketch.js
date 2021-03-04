
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof
var bob3,bob2,bob1,bob4,bob5
var string3,string2,string1,string4,string5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	roof = new Roof(width/2,100)
	bob3 = new Bob(width/2,250)
	string3 = new String1({ x: width/2, y: 100}, bob3.body)
	bob2 = new Bob(width/2-40,250)
	string2 = new String1({ x: width/2-40, y: 100}, bob2.body)
	bob1 = new Bob(width/2-80,250)
	string1 = new String1({x: width/2-80, y: 100},bob1.body)
	bob4 = new Bob(width/2+40,250)
	string4 = new String1({x: width/2+40, y: 100},bob4.body)
	bob5 = new Bob(width/2+80,250)
	string5 = new String1({x: width/2+80, y: 100},bob5.body)
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
 roof.display()
 bob3.display()
 string3.display()
 bob2.display()
 string2.display()
 bob1.display()
 string1.display()
 bob4.display()
 string4.display()
 bob5.display()
 string5.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:8,y:1})
	}
}


