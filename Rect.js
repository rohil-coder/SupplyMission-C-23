class Box
{
    constructor()
    {
        var options = 
        {
            restitution:1, isStatic:true
        }
        this.body = bodies.rectangle(300, 650, 200, 20, options);
        World.add(world, this.body);
        this.body2 = bodies.rectangle(400, 750, 20, 100);
        World.add(world, this.body2);
        this.body3 = bodies.rectangle(500, 650, 200, 20);
        World.add(world, this.body3);
        display()
        {
            var pos = this.body.position;
           
            Fill("red");
            rect(pos.x, pos.y, this.width, this.height);
        }
    }

}