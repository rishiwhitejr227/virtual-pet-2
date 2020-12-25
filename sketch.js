//Create variables here
var dog,dogI,food

function preload()
{
  //load images here
  dogI=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  dog=createSprite(400,350,20,20)
  dog.addImage(dogI)
  dog.scale=0.25
  

}


function draw() { 
  background("black")
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    
  }
 // text("food remaining"+food,400,400)


  drawSprites();
  //add styles here
  text("food Remaining:"+food,150,200)

}
function readStock(data){
  food=data.val()

}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({

    Food:x
    
  })

}


