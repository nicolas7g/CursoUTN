//d&d proporciona 7 eventos y un objeto dataTrasfer(vive en los eventos)
//-dragstart   - dragend  -drag  -> elemento que estamos arrastrando
//dragenter -dragleave -dragover -drop -> la zona de destino

const titulo = document.querySelector("#titulo");

//cuando se inicia el arrastre
titulo.addEventListener("dragstart",(event)=>{
    const info = titulo.textContent;
    console.log(event.dataTransfer);
    event.dataTransfer.setData("text/plain", info);
}); 

//cuando se suelta el objeto
titulo.addEventListener("dragend",(event)=>{
    
    console.log("se solto el elemento");
}); 

//cuando se suelta el objeto
titulo.addEventListener("drag",(event)=>{
    
    console.log("estamos arrastrando el elemento");
}); 

const eventoDragEnter = () =>{
    console.log("eventoDragEnter");
}

const eventoDragLeave = () =>{
    console.log("eventoDragLeave");
}


//dragover  - drop   -> trabajan en conjunto

const eventoDragOver=(e)=>{
    e.preventDefault(); // le quito su funcionalidad por defecto, en este caso ejecutarse siempre que este sobre la zona de destino, incluso cuando suelto el objeto, bloqueando asi el evento drop. 
    console.log("el elemento se encuentra dentro de la zona de destino");
}


const eventoDrop=(evento)=>{
    console.log("Drop ejecutado");
    const info = evento.dataTransfer.getData("text/plain");
    const destino = document.querySelector(".zona-destino");
    destino.textContent= info;
    evento.dataTransfer.clearData("text/plain");
}

//queres mostrat un archivo externo que cargamos

const dropArchivo=(ev)=>{
    console.log(ev.dataTransfer.files[0]);
    let destino = document.querySelector(".zona-destino");
    const infoArchivo = ev.dataTransfer.files[0];
    if (infoArchivo.type === "application/pdf"){
        destino.innerHTML = `<img src="./imagen.jpg" alt="" /> <p>${infoArchivo.name}</p>`
    }
}