const video= document.querySelector("video");
const duracionTotal=document.querySelector("#duracion");
const botonPlay = document.querySelector("#play");
const botonPause = document.querySelector("#pause");
const but_historia = document.querySelector(".hist");
const but_juego = document.querySelector(".jug");
const svg_monitor = document.querySelector("svg");

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



    botonPlay.addEventListener("click",()=>{
        console.log("play");
        inicioVideo();
    } )

    botonPause.addEventListener("click",()=>{
        console.log("pause");
        pausaVideo();
    } )

    video.addEventListener('loadedmetadata',()=>{
        console.log(video.duration);
        duracionTotal.textContent = transformacion(video.duration);  

     })
     


//propiedades de video-audio
//duration -> duracion del video en segundos
// play() | pause() -> metodos de video|audio y permite manipular la reproducion y la pausa del video
// currentTime -> tiempo actual del video en segundos


//load-> evento en la pantalla para que una vez cargado los elementos se ejecute


function transformacion(tiempo) {
    // Calcula la cantidad de minutos
    const minutos = Math.floor(tiempo / 60);
  
    // Calcula el residuo (segundos restantes después de convertir a minutos)
    const segundosRestantes = tiempo % 60;
  
    // Retorna el resultado como un objeto o en el formato que prefieras
   
      return minutos+":"+segundosRestantes.toFixed(0);

  }




const inicioVideo=()=>{
    video.play();
}

const pausaVideo=()=>{
    video.pause();
}


