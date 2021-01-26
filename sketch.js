

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var ground;

var box2;


function setup(){
   createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;

  var ground_options ={
      isStatic: true
   }

   ground = Bodies.rectangle(100,290,200,20,ground_options);
  World.add(world,ground);
    
   box2 = new Box1();

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,100,20);

    box2.display();
    
}



