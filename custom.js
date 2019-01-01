function play(){
    let myvideo = document.querySelector("#video1");
    if (myvideo.paused){
        myvideo.play();
    } else {
        myvideo.pause();
    }
}

function stop(){
    let myvideo = document.querySelector("#video1");
    myvideo.pause();
    myvideo.currentTime = 0;
}

function reverse() {
    let myvideo = document.querySelector("#video1");
    myvideo.currentTime -= 1;
}

function fastForward(){
    let myvideo = document.querySelector("#video1");
    myvideo.currentTime += 1;
}