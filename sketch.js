const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var backgroundImg;
var engine, world;
var flake, flake2, flake3, flake4, flake5;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  
  
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  flake = new Snowflake(random(0, width), 0, 20, 20);
  flake2 = new Snowflake(random(0, width), 0, 20, 20);
  flake3 = new Snowflake(random(0, width), 0, 20, 20);
  flake4 = new Snowflake(random(0, width), 0, 20, 20);
  flake5 = new Snowflake(random(0, width), 0, 20, 20);
}

function draw() {
 
  background(backgroundImg);
  Engine.update(engine);

  flake.display();
  flake2.display();
  flake3.display();
  flake4.display();
  flake5.display();
  
}