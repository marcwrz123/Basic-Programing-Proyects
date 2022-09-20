var n_vacas = document.getElementById("n_vacas");
var n_pollos = document.getElementById("n_pollos");
var boton = document.getElementById("boton");
boton.addEventListener("click", a_darle);

var vp = document.getElementById("canvas");
var papel = vp.getContext("2d");
document.addEventListener("keydown", teclado_cerdo);

var cantidad_vacas;
var cantidad_pollos;

function a_darle()
{
  cantidad_vacas = parseInt(n_vacas.value);
  cantidad_pollos = parseInt(n_pollos.value);
  console.log("vacas " + cantidad_vacas);
  console.log("pollos " + cantidad_pollos);
  dibujar();
}

//movimiento del cerdo con el teclado.
var teclas = {   //variables de las teclas
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}

var x_cerdo = aleatorio(0, 240);
var y_cerdo = aleatorio(0, 240);
var movimiento = 13;

function teclado_cerdo(event)
{
    switch (event.code)
    {
    case teclas.UP:
      console.log("worjkign");
      y_cerdo = y_cerdo - movimiento;
      cerdo.posY = y_cerdo;
      dibujo_de_refrezco();
      //console.log(cerdo.posY);
      break;
    case teclas.DOWN:
      console.log("worjkign");
      y_cerdo = y_cerdo + movimiento;
      cerdo.posY = y_cerdo;
      dibujo_de_refrezco();
      //console.log(cerdo.posY);
      break;
    case teclas.LEFT:
      console.log("worjkign");
      x_cerdo = x_cerdo - movimiento;
      cerdo.posX = x_cerdo;
      dibujo_de_refrezco();
      //console.log(cerdo.posX);
      break;
    case teclas.RIGHT:
      console.log("worjkign");
      x_cerdo = x_cerdo + movimiento;
      cerdo.posX = x_cerdo;
      dibujo_de_refrezco();
      //console.log(cerdo.posX);
      break;
    }
}

//creacion de fondo
var fondo = {
  url: "tile.png", // ahi se mete la imagen en cuestion.
  cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;  //cargamos mapa en la fuente de "Image".
fondo.imagen.addEventListener("load", cargar_fondo); //hacemos un addveventlistener para que cargue la imagen

//creacion de vacas
var vaca = {
  url: "vaca.png",
  cargaOK: false,
  X: [],
  Y: []
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargar_vaca);

//creacion de pollos
var pollo = {
  url: "pollo.png",
  cargaOK: false,
  X: [],
  Y: []
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargar_pollo);

//creacion de cerdo
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  posX: x_cerdo,
  posY: y_cerdo
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargar_cerdo);

//la funcion de carga de la imagen
function cargar_fondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargar_vaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargar_pollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargar_cerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

//funcion que dibujara a los pngs en orden.
function dibujar()
{
  if(fondo.cargaOK == true)   // SI el fondo carga, entonces se pondra (dibujara) la imagen en el canvas, todo segun este orden.
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    //console.log(cantidad);
    for (var v = 0; v <= cantidad_vacas; v++)  //un ciclo para que se repita el numeros de vacas que salen en el canvas.
    {
      //variables X y Y con valores aleatorios, por ende, posiciones aleatorias de la imagen(x, y).
      var x = aleatorio(-1, 8);
      var y = aleatorio(-1, 8);
      var x = x * 60;
      var y = y * 60;
      vaca.X[v] = x; //valores que se pondran despues en el de refrezo.
      vaca.Y[v] = y;
      //console.log(Y_refresh);
      //console.log(X_refresh);
      papel.drawImage(vaca.imagen, x, y);   //Aqui se dibujara la imagen en el canvas.
    }
  }
  if(pollo.cargaOK == true)
  {
    //console.log(cantidad);
    for (var p = 0; p <= cantidad_pollos; p++)  //un ciclo para que se repita el numeros de vacas que salen en el canvas.
    {
      //variables X y Y con valores aleatorios, por ende, posiciones aleatorias de la imagen(x, y).
      var x = aleatorio(-1, 8);
      var y = aleatorio(-1, 8);
      var x = x * 60;
      var y = y * 60;
      pollo.X[p] = x; //valores que se pondran despues en el de refrezo.
      pollo.Y[p] = y;
      //console.log(Y_refresh);
      //console.log(X_refresh);
      papel.drawImage(pollo.imagen, x, y);   //Aqui se dibujara la imagen en el canvas.
    }
  }
  if(cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo);
  }
}

//funcion que reedibuja el canvas, para que no se repita el cerdo y cambie de posicion.
function dibujo_de_refrezco()
{
  if(fondo.cargaOK == true)   // SI el fondo carga, entonces se pondra (dibujara) la imagen en el canvas, todo segun este orden.
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    for (var v = 0; v <= cantidad_vacas; v++)  //un ciclo para que se repita el numeros de vacas que salen en el canvas.
    {
      papel.drawImage(vaca.imagen, vaca.X[v], vaca.Y[v]);   //Aqui se dibujara la imagen en el canvas.
    }
  }
  if(pollo.cargaOK == true)
  {
    for (var p = 0; p <= cantidad_pollos; p++)  //un ciclo para que se repita el numeros de vacas que salen en el canvas.
    {
      papel.drawImage(pollo.imagen, pollo.X[p], pollo.Y[p]);   //Aqui se dibujara la imagen en el canvas.
    }
  }
  if(cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, cerdo.posX, cerdo.posY);
  }
}

//funcion que se ejecutara para dar numeros aleatorios.
function aleatorio(maxi, min)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;  //este es el codigo para crear un numero aleatorio
  return resultado; //el return sirve para que el resultado de resultado se devuelva de nuevo a quien la escribio (aleatorio) y termine la funcion ahi.
}
