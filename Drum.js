function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running
    audio.currentTime=0;  //rewind the audio to the start
    audio.play();
    key.classList.add("playing");
    removeTransition();
}
function removeTransition(){
    var keysAll= document.querySelectorAll(".key");
    keysAll.forEach(key => key.addEventListener("transitionend",function(){
        this.classList.remove("playing");
    }))

    // for(var i=0; i< keysAll.length; i++){
    //     keysAll[i].addEventListener("transitionend",function(){
    //         this.classList.remove("playing");
    //     });
    // }
};
window.addEventListener("keydown",playSound);