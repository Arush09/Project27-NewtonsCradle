class Bob{
    constructor(x, y,radius) {
        var options = {
            'isStatic': true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.height = width;
       // this.width = height;
       this.radius = radius;
        World.add(world, this.body);
      } 
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red")
        ellipse( 0, 0,this.radius,this.radius );
        pop();
       
      }
}
