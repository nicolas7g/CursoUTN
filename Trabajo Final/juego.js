const but_historia = document.querySelector(".hist");
const but_juego = document.querySelector(".jug");
const svg_monitor = document.querySelector("svg");
const but_reiniciar = document.querySelector(".but_reiniciar");

svg_monitor.addEventListener("click",()=>{
    console.log("click");
    window.location.href = './home_page.html';
} )

but_historia.addEventListener("click",()=>{
    console.log("click");
    window.location.href = './historia.html';
} );

but_juego.addEventListener("click",()=>{
    console.log("click");
    window.location.href = './juego.html';
} );

but_reiniciar.addEventListener("click",()=>{
    console.log("click");
   
} );