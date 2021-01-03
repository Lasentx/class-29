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
    
        this.image1 = loadImage("sprites/sling1.png") 
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")
    }
    display(){
        image(this.image1, 200 , 20)
        image(this.image2, 170 , 20)
        if(this.slingshot.bodyA){           //only if bodyA existed 
            strokeWeight(5);
            if(this.slingshot.bodyA.position.x<220){
                line(this.slingshot.bodyA.position.x-20,this.slingshot.bodyA.position.y,this.slingshot.pointB.x-10,this.slingshot.pointB.y)
                line(this.slingshot.bodyA.position.x-20,this.slingshot.bodyA.position.y,this.slingshot.pointB.x+30,this.slingshot.pointB.y)
                image(this.image3,this.slingshot.bodyA.position.x-25, this.slingshot.bodyA.position.y-10, 15, 30)
            }
            else{
                line(this.slingshot.bodyA.position.x+25,this.slingshot.bodyA.position.y,this.slingshot.pointB.x-10,this.slingshot.pointB.y)
                line(this.slingshot.bodyA.position.x+25,this.slingshot.bodyA.position.y,this.slingshot.pointB.x+30,this.slingshot.pointB.y)
                image(this.image3,this.slingshot.bodyA.position.x+25, this.slingshot.bodyA.position.y-10, 15, 30)
            }
        }
    }
    
    fly(){
        //bird is not connected to the slingshot
        //empty bodyA
        this.slingshot.bodyA = null;
    }

}

//null - empty/nothing