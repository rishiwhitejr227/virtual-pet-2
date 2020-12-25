class Food{
    constructor(){
        this.foodStock=0
        this.lastFed;
        this.image=loadImage("images/Milk.png")

     
        }
        updateFoodStock(foodStock){
            this.foodStock=foodStock
    }
    getFeedTime(lastFed){
        this.lastFed=lastFed
    }
    deductFoodStock(){
        if(this.foodStock>0){
            this.foodStock-=1
        }
    }
    getFoodStock(){
        return this.foodStock
    }
}
