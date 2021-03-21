class Paper {
    constructor(x,y,radius){
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'densiity':1.2,
    }
    this.body=Bodies.circle(x,y,radius);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("green")
        ellipseMode(RADIUS);
        ellipse(100,477,10,10);
        pop();
    }
}