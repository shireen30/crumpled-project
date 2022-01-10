class ground {
  constructor(x, y, w, h) {
      var ground_options = {
          isStatic : true,
      }
    var x, y, w, h;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h,ground_options);
    console.log(this.body)
    World.add(world, this.body);
  }
  display() {
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}
