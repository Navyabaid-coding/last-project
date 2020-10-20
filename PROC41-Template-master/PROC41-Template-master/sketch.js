const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
var Umbrella1Img,Umbrella2Img,Umbrella3Img,Umbrella4Img,Umbrella5Img,Umbrella6Img,Umbrella7Img,Umbrella8Img;
var drop,umbrella;
var lightning1Img,lightning2Img,lightning3Img,lightning4Img;

function preload(){
    Umbrella1Img.image= loadImage("WalkingFrame/walking_1.png");
    Umbrella2Img.image= loadImage("WalkingFrame/walking_2.png");
    Umbrella3Img.image= loadImage("WalkingFrame/walking_3.png");
    Umbrella4Img.image= loadImage("WalkingFrame/walking_4.png");
    Umbrella5Img.image= loadImage("WalkingFrame/walking_5.png");
    Umbrella6Img.image= loadImage("WalkingFrame/walking_6.png");
    Umbrella7Img.image= loadImage("WalkingFrame/walking_7.png");
    Umbrella8Img.image= loadImage("WalkingFrame/walking_8.png");

    lightning1Img.image=loadImage("thunderbolt/1.png");
    lightning2Img.image=loadImage("thunderbolt/2.png");
    lightning3Img.image=loadImage("thunderbolt/3.png");
    lightning4Img.image=loadImage("thunderbolt/4.png");
    
   

}

function setup(){
    createCanvas(400,400);
    engine=Engine.create();
    world= engine.World;
    
    drop = new Drop(30,380);
    umbrella=new Umbrella(200,200);
}

function draw(){
    drop.velocity.y=4;
    Drop.display();
    Umbrella.display();

}   

