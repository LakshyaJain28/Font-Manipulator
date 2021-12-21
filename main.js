noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,160);
    canvas=createCanvas(550,550);
    canvas.position(800,100);
    background("grey");
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialized");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
}