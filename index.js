

const videoContainer = document.getElementById("video-container");
const video = document.getElementById('intro');
const audio = document.getElementById("intro_music");
let gainNode = null;
const button = document.createElement("button");


function createGainNode() {
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioContext.createGain();
  let source = audioContext.createMediaElementSource(audio);
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
}
let audio1 = document.getElementById("start_music");

function unmuteAudio() {
  audio1.muted = false; 
  audio1.play();
}

document.getElementById("skipIntro").onclick = function(){
    let p=document.getElementById("start_photo");
    let s=document.getElementById("skipIntro");
    let g=document.getElementById("Enter");
    if(p.style.display === "block"){
        p.style.display="none";
        s.style.display="block";
        g.style.display="none";
    } else{
        p.style.display = "block";
        s.style.display="none";
        g.style.display="block";
    }
    createGainNode();
    gainNode.gain.value = 0;
    unmuteAudio();
    videoContainer.removeChild(video);
}
document.getElementById("Enter").onclick = function(){
  p=document.getElementById("pdc_photo");
  s=document.getElementById("Enter");
  g=document.getElementById("start_photo");
  const buttontest=document.getElementById("Enter");
  buttontest.addEventListener('click', function(){
    const container = document.querySelector("#Game_start");
    const newButton = document.createElement("button");
    newButton.className="tryb_gry";
    container.appendChild(newButton);
    console.log(container, newButton);
  })
  if(p.style.display === "block"){
    p.style.display="none";
    s.style.display="block";
    g.style.display="block";
    button.style.display="block"

} else{
    p.style.display = "block";
    s.style.display="none";
    g.style.display="none";
    button.style.display="none"
    
} 
}


