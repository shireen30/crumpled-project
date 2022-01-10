class ground  {
    constructor(x,y,w,h)
    {
        
        var x,y,w,h;
        this.x=x
        this.y = y
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h)
        World.add(world,this.body)
    }
    display()
    {
        rect(this.x,this.y,this.w,this.h)
    }
}
