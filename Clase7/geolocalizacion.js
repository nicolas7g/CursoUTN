const funcionOk = (posicion) =>{
    console.log(posicion);
    const parrafo=document.querySelector("p");
    parrafo.textContent = `Este dispositivo se ubica en la longitud: ${posicion.coords.longitude} y latitud: ${posicion.coords.latitude}` ;   
}       

const funcionError = (error) =>{

    console.log(error);
}

const objConf = {
    enableHighAccuracy:false,
    timeout: 1000,
    maximunAge:1000 //tiempo de espera entre cada busqueda

    
}

navigator.geolocation.getCurrentPosition(funcionOk, funcionError, objConf);