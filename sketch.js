var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  monkey=createSprite(40,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=true;
  
  score=0;
}

function draw() {
background(255);
  stroke("pink");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);
  
   score = score + Math.round(frameCount/60);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
    if(keyDown("space")&& monkey.y >=200){   
      monkey.velocityY=-12;
    }
    
    monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
drawSprites();
}

function spawnBananas(){
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,20,10);
   banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assbananaign lifetime to the variable
   banana.lifetime = 134;
    
    bananaGroup.add(banana);
    }
}

function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(500,400,10,40);
   obstacle.y = Math.round(random(10,60));
   obstacle.velocityX = -3;
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
   }
}
