var canvas;
var music;
var b1,b2,b3,b4;
var box;
var edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(100,590,170,20);
    b1.shapeColor="blue"
    b2=createSprite(300,590,170,20);
    b2.shapeColor="orange"
    b3=createSprite(500,590,170,20);
    b3.shapeColor="pink"
    b4=createSprite(700,590,170,20);
    b4.shapeColor="green"



    //create box sprite and give velocity

    box=createSprite(Math.round(random(20,750)),100,30,30);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);

if(b1.isTouching(box)&&box.bounceOff(b1)){
    box.shapeColor="blue";
}
if(b2.isTouching(box)&&box.bounceOff(b2)){
    box.shapeColor="orange";
}
if(b3.isTouching(box)&&box.bounceOff(b3)){
    box.shapeColor="pink";
}
if(b4.isTouching(box)&&box.bounceOff(b4)){
    box.shapeColor="green";
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(p1,p2){
    p1.x-p2.x<p1.width/2+p2.width/2
    &&p2.x-p1.x<p1.width/2+p2.width/2
    &&p1.y-p2.y<p1.height/2+p2.height/2
    &&p2.y-p1.y<p1.height/2+p2.height/2
}