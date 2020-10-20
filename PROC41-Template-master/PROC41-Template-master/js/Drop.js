class Drop{
constructor(x,y){
        var options = {
            friction: 0.1,
            restitution :1}
    this.body = Bodies.circle(x,y,options);
    world.add(World,this.body);
     }

     display(){
        fill(15);

     }
// update(){
        // if(drop.y>0){
          //   drop.y=0
         //}
    
    
}