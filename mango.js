class Mango{
    constructor(x, y){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, 0, 0, options);
        this.image = loadImage("image/mango.png");
        World.add(world,this.body);
    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(0, 0, 0);
        image(this.image, 0, 0, 0, 0);
        pop();
    }

    
}