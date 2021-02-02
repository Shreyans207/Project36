var dog,sadDog,happyDog;
var foodObject , fedTime , lastFed;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObject = new Feed();

}

function draw() {
  background(46,139,87);
  foodObject.display();
  foodObject.hour();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
    foodObject.updateFoodStock(foodObject.getFoodStock()-1);
    database.ref('/').update({
      Food : foodObject.getFoodStock(),
      FeedTime : hour()
    })
  }


//function to add food in stock
function addFood(){
  foodObject++;
  database.ref("/").update({
  food : foodS  
  })
}