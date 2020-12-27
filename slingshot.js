class Slingshot{
    constructor(body1, point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            stiffness:0.05,
            length:15
        }
        this.slingshot = Matter.Constraint.create(options)
        World.add(world, this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){        
            line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.slingshot.pointB.x,this.slingshot.pointB.y)
        }
    }
    fly(){
        //bird is not connected to the slinsghot
        //empty bodyA
        this.slingshot.bodyA = null;
    }

}

//null - empty/nothing