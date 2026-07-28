// =======================================
// SCRAPBOOK BIRTHDAY WEBSITE
// script.js
// =======================================

const pages = document.querySelectorAll(".page");

function nextPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ===============================
// Floating Sparkles
// ===============================

function createSparkle(){

const sparkle=document.createElement("span");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.animationDuration=

(6+Math.random()*5)+"s";

sparkle.style.opacity=Math.random();

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},10000);

}

setInterval(createSparkle,700);

// ===============================
// Fade-in Observer
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll(

".polaroid,.letter-paper,.photo-caption"

).forEach(el=>observer.observe(el));
// ===============================
// Typewriter Effect
// ===============================

function typeWriter(){

const paragraphs=document.querySelectorAll(

".letter-paper p"

);

paragraphs.forEach(paragraph=>{

const text=paragraph.innerHTML;

paragraph.innerHTML="";

let index=0;

function write(){

if(index<text.length){

paragraph.innerHTML+=text.charAt(index);

index++;

setTimeout(write,18);

}

}

write();

});

}

// Run only when the letter page opens
const originalNextPage=nextPage;

nextPage=function(id){

originalNextPage(id);

if(id==="letter"){

setTimeout(typeWriter,500);

}

};

// ===============================
// Stamp Animation
// ===============================

const stamp=document.querySelector(".stamp");

if(stamp){

window.addEventListener("load",()=>{

stamp.animate(

[

{

transform:"translateY(-250px) rotate(-8deg) scale(.2)",

opacity:0

},

{

transform:"translateY(20px) rotate(-8deg) scale(1.08)",

opacity:1

},

{

transform:"translateY(0) rotate(-8deg) scale(1)"

}

],

{

duration:900,

easing:"ease-out"

}

);

});

}
// ===============================
// Button Click Animation
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",()=>{

button.animate(

[

{transform:"scale(1)"},

{transform:"scale(.95)"},

{transform:"scale(1)"}

],

{

duration:180,

easing:"ease-out"

}

);

});

});

// ===============================
// Read Again Button
// ===============================

const readAgain=document.querySelector(".final-page button");

if(readAgain){

readAgain.addEventListener("click",()=>{

location.reload();

});

}

// ===============================
// END OF FILE
// ===============================
