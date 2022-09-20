var texto = document.getElementById("cuadrito de texto");
var boton = document.getElementById("botoncito");
var boton_rojo = document.getElementById("boton rojo");
var boton_negro = document.getElementById("boton negro");
var boton_naranja = document.getElementById("boton naranja");
var boton_azul = document.getElementById("boton azul");
var color_definitivo;
  boton_rojo.addEventListener("click", color_rojo);
  boton_negro.addEventListener("click", color_negro);
  boton_naranja.addEventListener("click", color_naranja);
  boton_azul.addEventListener("click", color_azul);
  boton.addEventListener("click", dibujo_por_click);

function color_rojo()
{
  if(boton_rojo.value)
  {
    color_definitivo = "red";
  }
}

function color_negro()
{
  if(boton_negro.value)
  {
    color_definitivo = "black";
  }
}

function color_naranja()
{
  if(boton_naranja.value)
  {
    color_definitivo = "orange";
  }
}

function color_azul()
{
  if(boton_azul.value)
  {
    color_definitivo = "blue";
  }
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujo_por_click ()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var l = 0;
  var yi_AbajoI, xf_AbajoI;
  var xi_ArribaI, yf_ArribaI;
  var yi_AbajoD, xf_AbajoD;
  var xi_ArribaD, yf_ArribaD;
  var pruebita;
  var pruebita2;
  var pruebita3;
  var pruebita4;
  var color_de_linea = color_definitivo;

  for( l = 0; l < lineas; l++)
  {
    yi_AbajoI = espacio * l;
    xf_AbajoI = espacio * (l + 1);
    dibujarLinea(color_de_linea, 0, yi_AbajoI, xf_AbajoI, 300);
      console.log("linea " + l);
  }

  for( l = 0; l < lineas; l++)
  {
    xi_ArribaI = 300 - (l * espacio);
    yf_ArribaI = espacio * l;
    dibujarLinea(color_de_linea, xi_ArribaI ,0 , 0, yf_ArribaI);
      console.log("linea " + l);
  }

  for( l = 0; l < lineas; l++)
  {
    yi_AbajoD = espacio * l;
    xf_AbajoD = 300 - (espacio * l);
    dibujarLinea(color_de_linea, 300 ,yi_AbajoD , xf_AbajoD, 300);
      console.log("linea " + l);
  }

  for( l = 0; l < lineas; l++)
  {
    xi_ArribaD = espacio * (l + 1);
    yf_ArribaD = espacio * l;
    dibujarLinea(color_de_linea, xi_ArribaD, 0, 300, yf_ArribaD);
      console.log("linea " + l);
  }

  for( l = 0; l < lineas; l++)
  {
    pruebita = espacio * l;
    pruebita2 = 300 - (espacio * l);
    dibujarLinea(color_de_linea, 0, pruebita, 300, pruebita2);
      console.log("linea " + l);
  }

  for( let l = 0; l <= lineas; l++)
  {
    pruebita3 = espacio * l;
    pruebita4 = 300 - (espacio * l);
    dibujarLinea(color_de_linea, pruebita3, 0, pruebita4, 300);
      console.log("linea " + l);
  }

  dibujarLinea(color_de_linea, 1, 299, 299, 299);
  dibujarLinea(color_de_linea, 1, 1, 299, 1);
  dibujarLinea(color_de_linea, 1, 1, 1, 299);
  dibujarLinea(color_de_linea, 299, 1, 299, 299);
  dibujarLinea(color_de_linea, 1, 299, 299, 1);

  function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
  }
  console.log(texto);
}
