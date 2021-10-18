const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    console.log(hour);
    if(hour>=12){
        console.log(hour);
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        console.log(hour);
        text("Time : 12 AM",100,100);
    }else{
        console.log(hour);
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

        var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
    
        hour = datetime.slice(11, 13);
    
        if(hour>=14 && hour<=19) {
    
            bg = "sunrise.png";
    
        } else {
    
            bg = "sunset.png";
    
        }

        //console.log(hour);
    
    backgroundImg = loadImage(bg);
  }