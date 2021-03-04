class String1{
    constructor(pointA,bodyB){
        
        var options={
            pointA:pointA,
            bodyB:bodyB,
            stiffness: 1,
            length:160
        }
        
        this.string1 = Matter.Constraint.create(options)
        World.add(world,this.string1)
        this.pointA = pointA
    }
    display(){
        push()
        strokeWeight(4)
        stroke(255)
        line(this.pointA.x,this.pointA.y,this.string1.bodyB.position.x,this.string1.bodyB.position.y)
        pop()
    }
}