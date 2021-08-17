var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    //Quando tento carregar a musica o jogo não carrega e fica na tela branca,comentei os codigos, mas eles não estão funcionando
    //music.loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(820,600);

    //music.loop();

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityY += 6;
    ball.velocityX += 6;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
     
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        // music.play();
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange"; 
       // music.play();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";  
       // music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green"; 
       // music.play();
    }


    drawSprites();
}
