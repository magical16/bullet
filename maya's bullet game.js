var wall1 ,thickness;


var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,201)
	weight=random(30,52)
	thickness=random(22,83);

	bullet=createSprite(50, 200, 50,25);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


//	bullet2=createSprite(50, 600, 50,25);   
//
//	bullet2.velocityX = speed;

//	bullet2.shapeColor=color(255);

  
  	wall1=createSprite(1200,200, thickness, height/2)
  	wall1.shapeColor=color(80,80,80)

//    wall2=createSprite(1200,600, thickness, height/4)
  //	wall2.shapeColor=color(80,80,80)

}



function draw() {
  background(0);

  if(wall1.x-bullet.x < (bullet.width+wall1.width)/2)
  //if(wall2.x-bullet2.x < (bullet.width+wall2.width)/2)
 
  {
	  bullet.velocityX=0;
	var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;

	damage=0.5*32*223*223/70*70*70
	if(damage>10 )
	{
		wall1.shapeColor="red";
	}

	//bullet2.velocityX=0;
	//var damage1=0.5 * weight * speed* speed/thickness*thickness*thickness;
	//damage1=0.5*32*223*223/40*40*40
	//if(damage1<10)
//	{
//		wall2.shapeColor="white";
//	}
  }  
  
  drawSprites();
 
}


