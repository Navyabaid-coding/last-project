class Umbrella{
    constructor(x,y){
        options = {
            static:true
        }
     this.body= Bodies.circle(x,y,options);
     World.add(World,this.body);   
    }
    
    display(){
        fill(45);
        elipseMode(CENTER);
    }
}