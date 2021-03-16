var dog,sadDog,happyDog;
var foodObject , fedTime , lastFed;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(displayWidth , displayHeight )

  foodObject = new Feed();

  database = firebase.database();
  foodStock=database.ref('Food'); 
  foodStock.on("value", readStock );

  feed=createButton("Feed the dog"); feed.position(700,95); 
  feed.mousePressed(feedDog); addFood=createButton("Add Food");
  addFood.position(800,95); addFood.mousePressed(addFoods);

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  

}

function draw() {
  background(46,139,87);
  foodObject.display();
  foodObject.getFedTime();

  fill(255,255,255);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed : " + lastFed%12 + " PM" , 350,30);
        }else if(lastFed == 0){
            text("Last Feed : 12 AM" , 350,30 )
        }else {
            text("Last Feed : " + lastFed + " AM" , 350,30 )
        }

  drawSprites();
}

//function to read food Stock
function readStock(data){
   foodS=data.val(); foodObject.updateFoodStock(foodS); 
  }


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
function addFoods(){
   foodS++; database.ref('/').update({ Food:foodS }) 
  }
