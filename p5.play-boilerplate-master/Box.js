class Baseclass
{
    constructor(x,y,width,height)
    {
        var prop = 
        {
            'restitution' : 0.8,
            'friction'    : 1,
            'density'     : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,prop);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


    }

    display()
    {

        var p = this.body.position;
        var a = this.body.angle;
        push();

        translate(p.x , p.y);
        rotate(a);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}