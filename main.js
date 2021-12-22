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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw()
{
    background("grey");
fill(0,0,255);
stroke(0,0,255);
textSize(difference);
text("Peter",noseX,noseY);
}