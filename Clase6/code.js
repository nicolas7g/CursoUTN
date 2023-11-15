let elemento = document.querySelector("#__canvas");
let lienzo = elemento.getContext("2d");

lienzo.fillRect(20,20, 30, 30);


lienzo.beginPath(); //indico la inicializacion del trazado
lienzo.moveTo(100,20);
lienzo.lineTo(200,20);
lienzo.rect(220,20,50,50);
lienzo.stroke();//indico la finalizacion del trazado, con este metodo dibuja segun lo indicado anteriormente
lienzo.closePath();

lienzo.clearRect(20,20,20,20); //genera un rectangulo con el color de fondo, lo que "tapa" cualquier objeto que se superponga
/* //IMAGENES
let imagen=document.createElement('img');
imagen.src="./img_lamp.jpg";

imagen.addEventListener("load", function(){

    lienzo.clearRect(0, 0, elemento.width, elemento.height);
    const pattern = lienzo.createPattern(imagen, "repeat");
    lienzo.rect(10, 10, 300, 200);
    lienzo.fillStyle = pattern;
    lienzo.fill();//fill() o stroke() stroke marca el contorno, fill ademas completa el relleno
 
    // lienzo.drawImage(imagen, 20,20,300,200)

});
*/

//CIRCUNFERENCIA
let deg45=Math.PI/180*45; //radianes-> Math.PI/180*45 -> radianes equivalentes a 45°
let deg360=Math.PI/180*360;

lienzo.beginPath();
lienzo.strokeStyle="violet";
lienzo.moveTo(250,100);
lienzo.arc(250,100,25,0,deg360,true);
lienzo.stroke();
lienzo.closePath();