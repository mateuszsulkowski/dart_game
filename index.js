

const videoContainer = document.getElementById("video-container");
const video = document.getElementById('intro');
const audio = document.getElementById("intro_music");
let gainNode = null;
const button = document.createElement("button");
const pick = document.getElementById("tryb");

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
  /*const buttontest=document.getElementById("Enter");
  buttontest.addEventListener('click', function(){
    const container = document.querySelector("#Game_start");
    const newButton = document.createElement("button");
    newButton.className="tryb_gry";
    container.appendChild(newButton);
    console.log(container, newButton);
  })*/
  if(p.style.display === "block"){
    p.style.display="none";
    s.style.display="block";
    g.style.display="block";
    pick.style.display="none";

} else{
    p.style.display = "block";
    s.style.display="none";
    g.style.display="none";
    pick.style.display="block";
    
} 
}

document.getElementById("tryb").onclick = function(){
  p=document.getElementById("tryb1");
  s=document.getElementById("tryb2");
  g=document.getElementById("tryb3");
  if(p.style.display === "block"){
    p.style.display="none";
    s.style.display="none";
    g.style.display="none";
  }else{
    p.style.display = "block";
    s.style.display="block";
    g.style.display="block";
  }
}
document.getElementById("tryb1").onclick = function(){
  p=document.getElementById("name");
  s=document.getElementById("tryb2");
  g=document.getElementById("tryb3");
  let f=document.getElementById("tryb");
  if(p.style.display === "block"){
    f.style.display="block";
    s.style.display="block";
    g.style.display="block";
    p.style.display="none";
  }else{
    f.style.display = "none";
    s.style.display="none";
    g.style.display="none";
    p.style.display="block";
  }
}
document.getElementById("tryb3").onclick = function(){
  p=document.getElementById("turniej");
  s=document.getElementById("tryb2");
  g=document.getElementById("tryb1");
  let f=document.getElementById("tryb");
  if(p.style.display === "block"){
    f.style.display="block";
    s.style.display="block";
    g.style.display="block";
    p.style.display="none";
    document.getElementById("start")="block";

  }else{
    f.style.display = "none";
    s.style.display="none";
    g.style.display="none";
    p.style.display="block";
    document.getElementById("start")="none";

  }
}
document.getElementById("tryb2").onclick = function(){
  p=document.getElementById("turniej");
  s=document.getElementById("tryb3");
  g=document.getElementById("tryb1");
  let f=document.getElementById("tryb");
  if(p.style.display === "block"){
    f.style.display="block";
    s.style.display="block";
    g.style.display="block";
    p.style.display="none";
    
  }else{
    f.style.display = "none";
    s.style.display="none";
    g.style.display="none";
    p.style.display="block";
  }
  
}

document.getElementById("name_submit").onclick=function() {
  p=document.getElementById("name_submit");
  s=document.getElementById("name_text");
  g=document.getElementById("tryb1");
  f=document.getElementById("player_name");
  

  if(p.style.display === "block"){
    s.style.display="block";
    g.style.display="block";
    p.style.display="block";
    f.style.display="block";

  }else{
    s.style.display="none";
    g.style.display="none";
    p.style.display="none";
    f.style.display="none";


  }
  let textBoxValue = document.getElementById("name_text").value;
  document.getElementById("print_name").innerHTML = "Imie twojego zawodnika to: "+textBoxValue;
  if(p.style.display === "block"){
    document.getElementById("start").style.display="none";
  }else{
    document.getElementById("start").style.display="block";
  }
}
document.getElementById("start").onclick = function(){
  p=document.getElementById("pdc_photo");
  p.style.display="none";
  document.body.style.backgroundColor = "white";
  document.getElementById("print_name").style.display="none";
  document.getElementById("start").style.display="none";

}
/*let canvas=document.getElementById("tarcza");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 50); // Początek linii
ctx.lineTo(250, 50); // Koniec linii
ctx.lineWidth = 2; // Grubość linii
ctx.strokeStyle = "#f00"; // Kolor linii
ctx.stroke(); // Narysuj linie

// Dodatkowe linie
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(250, 150);
ctx.lineWidth = 2;
ctx.strokeStyle = "#00f";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineTo(150, 250);
ctx.lineWidth = 2;
ctx.strokeStyle = "#0f0";
ctx.stroke();*/