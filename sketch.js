var car, wall; 
var speed, weight; 
var deformation;
function setup() {
  createCanvas(1000,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(800,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(car.width/2+wall.width/2 >= wall.x-car.x) {
    car.velocityX=0;
deformation=0.5*weight*speed*speed/22500;
if(deformation<100){
  car.shapeColor=color(0,255,0);
}
else if(100<deformation && deformation<180){
car.shapeColor=color(230,230,0)
}
else{
  car.shapeColor=color(255,0,0)
}
  }
  drawSprites();
}