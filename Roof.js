class Roof{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,350,30,{isStatic:true})
        World.add(world,this.body)
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,350,30)
    }

}