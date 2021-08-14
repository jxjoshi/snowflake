class Snowflake{
    constructor(x,y,angle){
        var options = {
            'density':1.0,
            'frictionAir': 0.05
        }
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.image = loadImage('snow5.webp');
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();
      }
}