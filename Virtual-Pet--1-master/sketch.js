//Create variables here
var dog,happyDog,dogSprite;
var foodS,foodStock;
var database;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg1.png");
  happyDog=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  dogSprite=createSprite(250,250,20,20);
  dogSprite.addImage(dog);
  dogSprite.scale=0.1
``

  foodStock=database.ref("Food")
  foodStock.on("value",readStock);

 
}


function draw() {  
background(46, 139, 87);

if(keyDown(UP_ARROW) && foodS!=0){
  foodS=foodS-1;
 // console.log(foodS)
  writeStock(foodS);
  dogSprite.addImage(happyDog);
}


  drawSprites();
  //add styles here
  textSize(18);
  fill("white")
  textStyle(BOLD);
  text("PRESS UP ARROW",180,300);
  text("TO FEED DRAGO",180,330)
  text("Food Left: " + foodS ,180,180)
} 
function readStock(data){
  foodS=data.val();
}
 function writeStock(x){
 if(x<=0){
     x=0
   }
   else{
   x=x-1
    
   }
   console.log(x)
   database.ref('/').update({
    Food:x
   })

   
 }

