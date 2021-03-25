var fixedRect
var movingRect
var object1, object2, object3, object4 

function setup() {
  createCanvas(800,800);
 
  fixedRect = createSprite(200, 200, 90, 60)
  movingRect = createSprite(500, 600, 60, 190)

  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "yellow"

  fixedRect.debug = true
  movingRect.debug = true 

  object1 = createSprite(100, 100, 50, 50)
  object1.shapeColor = "green"
  object2 = createSprite(200, 100, 50, 50)
  object2.shapeColor = "green"
  object3 = createSprite(300, 100, 50, 50)
  object3.shapeColor = "green"
  object4 = createSprite(400, 100, 50, 50)
  object4.shapeColor = "green"

}

function draw() { 
  background(0);  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if (isTouching(movingRect,object3)) {
    movingRect.shapeColor = "red"
    object3.shapeColor = "red"
  }
  else {
    object3.shapeColor = "blue"
    movingRect.shapeColor = "yellow"
  }

  drawSprites();
}
