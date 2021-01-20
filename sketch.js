var profile, propic

function preload(){
 propic = loadImage("pro.gif");
}

function setup() {
  createCanvas(700,700);
profile = createSprite(350,350,400,400);
profile.addImage(propic);
profile.scale=0.4;
}


function draw() {  
 background(0);
 drawSprites();

}