class Feed{
    
    constructor(){
        
        var lastFed;
        this.image = loadImage("Images/Milk.png");
        this.feed = createButton("Feed the Dog")
        this.addFood = createButton("Add food to the Dog")
    }
    display(){
        var x = 80,y = 100;
        var foodstock = 0;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(foodstock!=0){
            for(var i = 0 ; i<foodstock ; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                }
                imageMode(CENTER);
                image(this.image , x , y , 50 , 50);
                x = x +30;
            }
        }
        fill(255,255,255);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed : " + lastFed%12 + " PM" , 350,30);
        }else if(lastFed == 0){
            text("Last Feed : 12 AM" , 350,30 )
        }else {
            text("Last Feed : " + lastFed + " AM" , 350,30 )
        }

        this.feed.position(700,95);
        this.feed.mousePressed(feedDog);
        this.addFood.position(800,95);
        this.addFood.mousePressed(addFood)
    }

    getFoodStock(){
        var foodObjectRef  = database.ref('foodObject');
        foodObjectRef.on("value",function(data){
        foodObject = data.val();

    })
  }

    updateFoodStock(food){
        database.ref("/").update({
            foodObject : food
        })
    }

    deductFood(){
        database.ref('/').update({
             })
    }
    hour(){
        fedTime = database.ref('FeedTime');
        fedTime.on('value',function(data){
            lastFed = data.val(); 
        })
    }
} 