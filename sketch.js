var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

speed = random(55, 90);
weight = random(400, 1500);

bullet=createSprite(50, 200, 50, 50);

wall=createSprite(1500, 200, 60, 200);
wall.shapeColor=color(80, 80, 80);

bullet.velocityX = speed;

thickness = random(22,83);

}

function draw() {
  background(255,255,255);



if(hasCollided(bullet,wall)){
  bullet.velocityX = 0

  var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(deformation > 10){
    wall.shapeColor=color(255, 0, 0)
  }

  if(deformation < 10){
  wall.shapeColor=color(0, 255, 0)
}
}

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletrightedge = bullet.x+bullet.width
  wallleftedge = wall.x
  if(bulletrightedge > wallleftedge){
    return true;
  }
  return false
}