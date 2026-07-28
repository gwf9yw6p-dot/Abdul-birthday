function nextPage(id){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById(id).classList.add("active");

window.scrollTo(0,0);

if(id==="finish"){
startConfetti();
}

if(id==="letter"){
typeLetter();
}

}

function typeLetter(){

// Disabled so HTML formatting like <br>, <b> and <i> displays correctly.

}

function startConfetti(){

const canvas=document.getElementById("confetti");

if(!canvas)return;

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let confetti=[];

for(let i=0;i<180;i++){

confetti.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height-canvas.height,

r:Math.random()*8+3,

d:Math.random()*180,

speed:Math.random()*3+2,

tilt:Math.random()*10,

color:["#AEEBFF","#D6F5FF","#FFFFFF","#FFE9F6","#FFF8C7"][Math.floor(Math.random()*5)]

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{

ctx.beginPath();

ctx.fillStyle=c.color;

ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

ctx.fill();

c.y+=c.speed;

c.x+=Math.sin(c.d);

if(c.y>canvas.height){

c.y=-10;

}

});

requestAnimationFrame(draw);

}

draw();

}
