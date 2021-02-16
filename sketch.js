var garden,mouse,cat
var gardenImg,mouseImg,catImg,catWalkImg,mouse2Img,cat3Img,mouse3Img


function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png")
    mouseImg=loadImage("images/mouse1.png")
    catImg=loadImage("images/cat1.png")
    catWalkImg=loadAnimation("images/cat2.png","images/cat3.png")
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3Img=loadImage("images/mouse4.png")
    cat3Img=loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(200,200)
    garden.addImage("garden",gardenImg)

    mouse=createSprite(100,400)
    mouse.addImage("mouse",mouseImg)
    mouse.addAnimation("mouse2",mouse2Img)
    mouse.addImage("mouse3",mouse3Img)
    mouse.scale=0.1

    cat=createSprite(500,400)
    cat.addImage("cat",catImg)
    cat.addAnimation("catWalk",catWalkImg)
    cat.addImage("cat3",cat3Img)
    cat.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
       cat.changeAnimation("cat3",cat3Img)
       mouse.changeAnimation("mouse3",mouse3Img)
       cat.velocityX=0
    
    }
    console.log("mouse.x",mouse.x)
    console.log("cat.x",cat.x)

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.changeAnimation("catWalk",catWalkImg)
      mouse.changeAnimation("mouse2",mouse2Img)
      cat.velocityX=-3
  }

}
