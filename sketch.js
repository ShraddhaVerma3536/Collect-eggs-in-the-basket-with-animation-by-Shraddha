var garden;
var table,tableImage; 
var hen1,hen2,hen3,hen4, henImage;
var egg1,egg2,egg3,egg4, eggImage;
var egg1Group,egg2Group,egg3Group,egg4Group;
var fireEgg, fireEggImage, fireEggGroup;
var bucket, bucketImage, bucketGroup;
var droop, droopImage, droopGroup;
var line1,line2,line3;
var END=0; 
var PLAY=1;
var gameState= PLAY;
var score=0;
var gameOver, gameOverImage;

function preload(){
  tableImage= loadImage("table.png");
  henImage= loadImage("hen.png");
  eggImage= loadImage("egg.png");
  fireEggImage= loadImage("egg2.png");
  bucketImage= loadImage("bucket.png");
  droopImage= loadImage("droop.png");
  gardenImage= loadImage("background.jpg");
  gameOverImage= loadImage("game_over.png");
}
function setup() {
  createCanvas(600, 500);
 
  garden= createSprite(100,80,10,10);
  garden.addImage(gardenImage);
  
  table=createSprite(260,250,10,10);
  table.addImage(tableImage);
  table.scale=2.75;
  
  hen1= createSprite(100,70,10,10);
  hen1.addImage(henImage);
  hen1. scale=0.30;
  
  hen2= createSprite(200,70,10,10);
  hen2.addImage(henImage);
  hen2. scale=0.30;
  
  hen3= createSprite(300,70,10,10);
  hen3.addImage(henImage);
  hen3. scale=0.30;
  
  hen4= createSprite(400,70,10,10);
  hen4.addImage(henImage);
  hen4. scale=0.30;
  
  bucketGroup=new Group();
  bucket= createSprite(100,450,10,10);
  bucket.addImage(bucketImage);
  bucket.scale=0.25
  //bucket.debug=true;
  bucket.setCollider("rectangle",0,0,200,200);
  line3= createSprite(100,450,100,10);
  line3.visible=false;
  bucketGroup.add(bucket);
  bucketGroup.add(line3);
  
  line1=createSprite(40,450,10,100);
  line1.visible=false;
  
  line2=createSprite(500,450,10,100);
  line2.visible=false;
  
  egg1Group=new Group();
  egg2Group=new Group();
  egg3Group=new Group();
  egg4Group=new Group();
  fireEggGroup=new Group();
  droopGroup=new Group();
}

function draw() {
  background("green");
  drawSprites();
  if(gameState===PLAY){
  bucket.bounceOff(line1);
  bucket.bounceOff(line2);
  if(keyDown("left")){
    bucket.x=bucket.x-5;
    line3.x=line3.x-5;
    }
  if(keyDown("right")){
    bucket.x=bucket.x+5;
    line3.x=line3.x+5;
  }
  line3.collide(bucket);
  var select1=Math.round(random(1,3));
  if(World.frameCount%40===0){
  if(select1===1){
    egg1= createSprite(100,150,10,10);
    egg1.addImage(eggImage);
    egg1.velocityY=5;
    egg1.scale=0.1;
    egg1Group.add(egg1);
  }
  }
  var select2=Math.round(random(1,3));
  if(World.frameCount%40===0){
  if(select2===1){
    egg2= createSprite(200,150,10,10);
    egg2.addImage(eggImage);
    egg2.velocityY=5;
    egg2.scale=0.1;
    egg2Group.add(egg2);
  }
  }
  var select3=Math.round(random(1,3));
  if(World.frameCount%40===0){
  if(select3===1){
    egg3= createSprite(300,150,10,10);
    egg3.addImage(eggImage);
    egg3.velocityY=5;
    egg3.scale=0.1;
    egg3Group.add(egg3);
  }
  }
  var select4=Math.round(random(1,3));
  if(World.frameCount%40===0){
  if(select4===1){
    egg4= createSprite(400,150,10,10);
    egg4.addImage(eggImage);
    egg4.velocityY=4;
    egg4.scale=0.1;
    egg4Group.add(egg4);
  }
  }
    console.log(score);
    if(World.frameCount%150===0){
    fireEgg= createSprite(Math.round(random(100,400)),150,10,10);
    fireEgg.addImage(fireEggImage);
    fireEgg.scale=0.1;
    fireEgg.velocityY=10;
    fireEggGroup.add(fireEgg);
       }
    if(World.frameCount%200===0){
    droop= createSprite(Math.round(random(100,400)),150,10,10);
    droop.addImage(droopImage);
    droop.scale=0.1;
    droop.velocityY=7;
    droopGroup.add(droop);
       }
    if(egg1Group.isTouching(line3)){
      egg1Group.destroyEach();
      score=score+1;
    }
    if(egg2Group.isTouching(line3)){
      egg2Group.destroyEach();
      score=score+1;
    }
    if(egg3Group.isTouching(line3)){
      egg3Group.destroyEach();
      score=score+1;
    }
    if(egg4Group.isTouching(line3)){
      egg4Group.destroyEach();
      score=score+1;
    }
    if(fireEggGroup.isTouching(line3)){
      fireEggGroup.destroyEach();
      score=score+3;
    }
    if(droopGroup.isTouching(line3)){
      gameState=END;
    }
    textSize("20");
    fill("red");
    text("SCORE="+score,480,100);
  }
  
  if(gameState===END){
    egg1Group.destroyEach();
    egg2Group.destroyEach();
    egg3Group.destroyEach();
    egg4Group.destroyEach();
    fireEggGroup.destroyEach();
    droopGroup.destroyEach();
    gameOver=createSprite(250,250,10,10);
    gameOver.addImage(gameOverImage);
    gameOver.scale=0.25;
     }
  
}