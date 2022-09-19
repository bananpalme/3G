function setup(){
    frameRate(60)
    console.log('setup')
    createCanvas(windowWidth, windowHeight)
    background('midnightblue')
    select('#info').html('sådan skriver man noget i HTML dokumentet')
}

function draw(){
    //mouseX mouseY frameCount map
}

function mousePressed(){
    select('#info').html('jeg er horny')
}

function mouseReleased(){
    select('#info').html('ikke længere')
}

function keyPressed(event){
    select('#info').html('cum spisning hvis du trykker: ' + event.key)
}