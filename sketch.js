
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {  
monkey=createSprite(80,315,20,20)
monkey.addAnimation("manu",monkey_running)
monkey.scale = 0.1 
ground = createSprite(400,350,900,10)
ground.velocityX=-4
foodGroup=new Group()
obstacleGroup=new Group()
score = 0 
survivalTime = 0
}


function draw() {
background("green")
if(ground.x<0){ 
   ground.x=ground.width/2
   }
  if(keyDown("space")){
     monkey.velocityY=-12
     }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  spawnFood()
  spawnObstacle()
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0
     monkey.velocityY = 0
     obstacleGroup.setVelocityXEach(0)
     foodGroup.setVelocityXEach(0)
     obstacleGroup.setLifetimeEach(-1)
     foodGroup.setLifetimeEach(-1)
     }
 drawSprites();
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
  }
function spawnFood() {
if(frameCount%80===0){
  banana=createSprite(600,240,40,10)
  banana.velocityX=-4
  banana.y=random(120,200)
  banana.addImage(bananaImage)
  monkey.depth=banana.depth+1
  banana.scale=0.05
  foodGroup.add(banana)
}
}
function spawnObstacle() {
if(frameCount%200===0){
  obstacle=createSprite(800,320,40,10)
  obstacle.velocityX=-4
  obstacle.addImage(obstaceImage)
  obstacle.scale=0.15
  obstacleGroup.add(obstacle)
}
}







