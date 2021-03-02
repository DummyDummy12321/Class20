var rect1, rect2;

function setup() 
{
  createCanvas(1800,800); 

  rect1 = createSprite(500,300,90,80);
  rect2 = createSprite(700,300,90,80);

  rect1.shapeColor = "orange";
  rect2.shapeColor = "orange";

  rect1.debug = true;
  rect2.debug = true;



}

function draw()
{
  background("purple"); 

  rect1.x = mouseX;
  rect1.y = mouseY;

  if( rect1.x - rect2.x < rect2.width/2 + rect1.width/2 &&  rect2.x - rect1.x < rect2.width/2 + rect1.width/2)
  {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  else
  {
    rect1.shapeColor = "orange";
    rect2.shapeColor = "orange";
  }
  
  
  drawSprites();
}





















