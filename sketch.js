
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var spaceship,spaceshipImg;
var startbutton,startbuttonImg;
var obstacle;
var score=0;
var bomb;

function preload(){
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	spaceship=createSprite(400,500,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("score= ",score,700,500)
  
  if(keyDown===UP_ARROW){
	spaceship.velocityY=2
  }
  if(keyDown===DOWN_ARROW){
	spaceship.velocityY=-2
  }
  if(keyDown===RIGHT_ARROW){
	spaceship.velocityX=2
  }
  if(keyDown===LEFT_ARROW){
	spaceship.velocityX=-2
  }
  if(keyDown==="space"){
	bomb=createSprite(400,500,20,20);
	bomb.velocityY=4;
  }
  if(bomb.isTouching(obstacleGroup)){
	  bomb.destroyEach();
	  obstacleGroup.destroyEach();
  }
  obstacleGroup= new Group();

  obstacles();
  drawSprites();
 
}

function obstacles(){
	obstacle.createSprite(random(0,800),20,20);
	obstacleGroup.add(obstacle)
}



