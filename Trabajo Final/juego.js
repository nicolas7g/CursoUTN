const but_historia = document.querySelector(".hist");
const but_juego = document.querySelector(".jug");
const svg_monitor = document.querySelector("svg");
const but_reiniciar = document.querySelector(".reiniciar");
const caja_dest = document.querySelectorAll(".caja_dest");
const caja_img = document.querySelectorAll(".caja_img");




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
        window.location.reload();
   
} );




caja_img.forEach(caja => {
    caja.addEventListener("dragover", (e)=>{
        e.preventDefault();
    })

    caja.addEventListener('dragstart',(e)=>{
        const imagen = caja.getElementsByTagName("img")[0];  

        e.dataTransfer.setData("text/html",`<img src= '${imagen.src}'/>`);
        e.dataTransfer.setData("Text",caja.id);
    });
})


caja_dest.forEach(caja => {
    caja.addEventListener("dragover", (e)=>{
        e.preventDefault();
    })
    caja.addEventListener("drop", (e)=>{
        console.log("se ejecuto el drop");
        const info=e.dataTransfer.getData("text/html");
        const caja_origen = document.getElementById(e.dataTransfer.getData("Text"));

        caja.innerHTML = info;
        
        caja_origen.style.display = 'none';
        e.dataTransfer.clearData("text/html");
        e.dataTransfer.clearData("Text");
    })
})








