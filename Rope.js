class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX;
        this.offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y:this.offsetY}
        }

        this.rope = Matter.constraint.create(options);
    World.add(world,this.rope);

    }
    display(){

        var point1 = this.rope.bodyA,position;
        var point2 = this.rope.bodyB,position;


        strokeWeight(2);



        var Anchor1X = point1.x
        var Anchor1Y = point1.y

        var Anchor2X = point1.x
        var Anchor2Y = point1.y

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor1Y)

    }
}