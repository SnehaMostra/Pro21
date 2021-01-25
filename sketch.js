var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,580,30,10);
    block1.shapeColor =  blue;

    block2 = createSprite(100,580,30,10);
    block2.shapeColor =  red;

    block3 = createSprite(100,580,30,10);
    block3.shapeColor =  blue;

    block4 = createSprite(100,580,30,10);
    block4.shapeColor =  green;

    //create box sprite and give velocity
    ball = createSprite(400,400);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edge = createSprite();


    //add condition to check if box touching surface and make it box
    if (block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = blue;
    } 

    if (block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = red;
    } 

    if (block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = blue;
    } 

    if (block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = green;
    } 
}
