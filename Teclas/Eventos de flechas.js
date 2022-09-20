var boton_rojo = document.getElementById("boton rojo");
var boton_negro = document.getElementById("boton negro");
var boton_naranja = document.getElementById("boton naranja");
var boton_azul = document.getElementById("boton azul");

boton_rojo.addEventListener("click", color_rojo);
boton_negro.addEventListener("click", color_negro);
boton_naranja.addEventListener("click", color_naranja);
boton_azul.addEventListener("click", color_azul);
var color_a_usar;  // color que se usara para dibujar, que es seleccionado por los botones.

//Funciones que eligen el color con el que se dibujara y se asignara en (color a usar).
function color_rojo(valor_de_click)
{
  if(boton_rojo.value)
  {
    color_a_usar = "red";
  }
}

function color_negro()
{
  if(boton_negro.value)
  {
    color_a_usar = "black";
  }
}

function color_naranja()
{
  if(boton_naranja.value)
  {
    color_a_usar = "orange";
  }
}

function color_azul()
{
  if(boton_azul.value)
  {
    color_a_usar = "blue";
  }
}

var teclas = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
};
  console.log(teclas);

var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");

//variables para recordar donde deje el ultimo punto dibujado (punto inicial)
var x = 150;
var y = 150;

//borde del canvas
dibujarLinea("black", 0, 0, 0, 300, papel);
dibujarLinea("black", 0, 0, 300, 0, papel);
dibujarLinea("black", 300, 0, 300, 300, papel);
dibujarLinea("black", 0, 300, 300, 300, papel);

//funcion que ejecuta las lineas del canvas (dibujo)
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

//Eventos de la pagina
document.addEventListener("keydown", dibujar_teclado);    //Se activa para dibujar con las teclas del teclado
cuadrito.addEventListener("mousedown", presionar_mouse);  //Se activa cuando presionas el mouse
cuadrito.addEventListener("mouseup", soltar_mouse);        //Se activa cuando ya no presionas el mouse
cuadrito.addEventListener("mousemove", mover_mouse);      //Se activa cuando mueves el mouse

var estado;
var x_mouse;
var y_mouse;

function presionar_mouse(evento_presionar_mouse)
{
  estado = 1;
  console.log(evento_presionar_mouse);
}

function soltar_mouse(evento_soltar_mouse)
{
  estado = 0;
}

function mover_mouse(evento_mover_mouse)
{
  var color_final = color_a_usar;
  if(estado == 1)
  {
    dibujarLinea(color_final, x_mouse, y_mouse, evento_mover_mouse.layerX, evento_mover_mouse.layerY, papel);
    x_mouse = evento_mover_mouse.layerX;
    y_mouse = evento_mover_mouse.layerY;
  }
}

//funcion que hace que se pueda dibujar con las teclas del teclado
function dibujar_teclado(tecla_oprimida)
{
  var color_final = color_a_usar;   //color que se va a asignar en todo el dibujo
  var movimiento  = 2;
  if(tecla_oprimida.code == teclas.UP)
  {
    dibujarLinea(color_final, x, y, x, y - movimiento, papel);
    y = y - movimiento
  }
  switch (tecla_oprimida.code) {  //este switch es como para que el "if" no sea tan largo y se pueda agrupar a travez de los casos que cambian
    case teclas.UP:
        dibujarLinea(color_final, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
    case teclas.DOWN:
        dibujarLinea(color_final, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
    case teclas.LEFT:
        dibujarLinea(color_final, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
    case teclas.RIGHT:
        dibujarLinea(color_final, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
    default:  //esto es como el else (el default)
        console.log("otra tecla");
        break;
  }
}
