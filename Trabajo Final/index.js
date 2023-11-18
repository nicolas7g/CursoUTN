const but_historia = document.querySelectorAll(".hist");
const but_juego = document.querySelectorAll(".jug");
const svg_monitor = document.querySelector("svg");


svg_monitor.addEventListener("click",()=>{
    console.log("click");
    window.location.href = './index.html';
} );

but_historia.forEach(boton => {
    boton.addEventListener("click",()=>{
        console.log("click");
        window.location.href = './historia.html';
    } )
})

but_juego.forEach(boton => {
    boton.addEventListener("click",()=>{
        console.log("click");
        window.location.href = './juego.html';
    } )
})