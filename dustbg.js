class Dust {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;


    

      
     
      imageMode(CENTER);
      image(this.image,1090,490,this.width,this.width);

    }
  };