var vp = document.getElementById("villa");

var papel = vp.getContext("2d");

var xini = aleatorio(0, 420);

var yini = aleatorio(0, 420);

var velocity = 15;



var fondo = {

  url: "tile.png",

  cargaOK: false

};

var vaca = {

  url: "vaca.png",

  cargaOK: false

};

var pollo = {

  url:"pollo.png",

  cargaOK: false

};

var cerdo = {

  url:"cerdo.png",

  cargaOK: false,

  posX: xini,

  posY: yini

};



var teclas = {

  UP: 38,

  DOWN: 40,

  LEFT: 37,

  RIGHT: 39

}





var cantidad = aleatorio(1, 5);



fondo.imagen = new Image();

fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", cargarFondo);



vaca.imagen = new Image();

vaca.imagen.src = vaca.url;

vaca.imagen.addEventListener("load", cargarVacas);



pollo.imagen = new Image();

pollo.imagen.src = pollo.url;

pollo.imagen.addEventListener("load", cargarPollos);



cerdo.imagen = new Image();

cerdo.imagen.src = cerdo.url;

cerdo.imagen.addEventListener("load", cargarCerdo);



document.addEventListener('keydown', movimiento);



function movimiento(evt)

{

  switch (evt.keyCode) {

    case teclas.UP:

      if (cerdo.posY > 0) {

        cerdo.posY = cerdo.posY - velocity;

        clear();

        dibujar();

      }

      break;

    case teclas.DOWN:

      if (cerdo.posY < vp.width - 80) {

        cerdo.posY = cerdo.posY + velocity;

        clear();

        dibujar();

      }

      break;

    case teclas.LEFT:

      if (cerdo.posX > 0) {

        cerdo.posX = cerdo.posX - velocity;

        clear();

        dibujar();

      }

      break;

    case teclas.RIGHT:

      if(cerdo.posX < vp.width - 80){

        cerdo.posX = cerdo.posX + velocity;

        clear();

        dibujar();

      }

      break;

    default:

  }

}





function cargarFondo()

{

  fondo.cargaOK = true;

  dibujar();

}

function cargarVacas()

{

  vaca.cargaOK = true;

  dibujar();

}

function cargarPollos()

{

  pollo.cargaOK = true;

  dibujar();

}

function cargarCerdo ()

{

  cerdo.cargaOK = true;

  dibujar();

}



function dibujar()

{

  if(fondo.cargaOK)

  {

    papel.drawImage(fondo.imagen, 0, 0);

  }

  if(vaca.cargaOK)

  {

    console.log(cantidad);

    for(var v=0; v < cantidad; v++)

    {

      var x = aleatorio(0, 7);

      var y = aleatorio(0, 10);

      var x = x * 60;

      var y = y * 40;

      papel.drawImage(vaca.imagen, x, y);

    }

  }



  if(pollo.cargaOK)

  {

    console.log(cantidad);

    for(var v=0; v < cantidad; v++)

    {

      var x = aleatorio(0, 7);

      var y = aleatorio(0, 10);

      var x = x * 60;

      var y = y * 40;

      papel.drawImage(pollo.imagen, x, y);

    }

  }



  if(cerdo.cargaOK)

  {

    console.log(cantidad);

    for(var v=0; v < cantidad; v++)

    {

      var x = aleatorio(0, 7);

      var y = aleatorio(0, 10);

      var x = x * 60;

      var y = y * 40;

      papel.drawImage(cerdo.imagen, cerdo.posX, cerdo.posY);

    }

  }

}



function aleatorio(min, maxi)

{

  var resultado;

  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;

  return resultado;

}

function clear(){

    papel.clearRect(0, 0, vp.width, vp.height);

    dibujar();

      }
