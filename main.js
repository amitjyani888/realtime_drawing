noseX=0;
noseY=0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup(){
video = createCapture(VIDEO);
video.size(500, 500);

canvas = createCanvas(500, 500);
canvas.position(560, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses)
}

function draw(){
    background('#0000FF');
    document.getElementById("square_side").innerHTML = "Width And Height Of A Square Will Be = " + difference + "px";
    fill('#F90093');
    stroke('F90093');
    square(noseX ,noseY , difference);
}
function modelLoaded()
{
console.log('PoseNet Is Initialized');
}

function getPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = leftwristX - rightwrist;
        difference.floor(leftwristX - rightwristX);
        console.log("leftwristX =" + leftwristX + "rigthwristX =" + rightwristX + "difference" + difference);
    }
}

