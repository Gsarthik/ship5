var ship_1,ship_2,ship_3,ship_4;
var sea,seaAnimation,seaImg;

function preload(){

  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
background("blue");
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.4;
  
  sea.velocityX = -4;


  ship = createSprite(200,200,2,20);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.scale = 0.2;

}

function draw() {
  background(220);
 sea.velocityX = -3;
  if(sea.x < 0){
    sea.x = sea.width/8;
  }


  drawSprites();

}