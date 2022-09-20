var grosor; //grosor de la linea de la funcion de dibujar en el canvas.
var color_a_usar;

//Funciones que eligen el color con el que se dibujara y se asignara en (color a usar).
function get_color()
{
  var colorsito = document.getElementById("color elegido").value;
  color_a_usar = colorsito;
  console.log(color_a_usar);
  grosor = 2;
}

var teclas = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
};

//Lo del borrador
var borrador = document.getElementById("borrador");
borrador.addEventListener("click", borrar_colores);

function borrar_colores(evento)
{
  if(borrador.value)
  {
    color_a_usar = "white";
    grosor = 7;
  }
}

//El canvas
var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");

//Eventos de la pagina, para dibujar con el mouse
cuadrito.addEventListener("mousedown", presionar_mouse);  //Se activa cuando presionas el mouse
cuadrito.addEventListener("mouseup", soltar_mouse);        //Se activa cuando ya no presionas el mouse
cuadrito.addEventListener("mousemove", mover_mouse);      //Se activa cuando mueves el mouse

var esta_dibujando;
var x_mouse;
var y_mouse;
var grosor_conmouse;

function presionar_mouse(h) //en los paréntesis no va un evento, va cualquier huevada, pero tiene que ir algo para usar la cosa de "offsetX", por lo que le cambié a la letra h
{
  //console.log(h);
  x_mouse = h.offsetX;
  y_mouse = h.offsetY;
      grosor_conmouse = grosor;
    if(grosor_conmouse == 7)
    {
      grosor_conmouse = 7;
      dibujarLinea(color_a_usar, grosor_conmouse, x_mouse, y_mouse, h.offsetX, h.offsetY, papel);
      esta_dibujando = true;
    }
    else if(grosor_conmouse == 2)
    {
      grosor_conmouse = 2;
      dibujarLinea(color_a_usar, grosor_conmouse, x_mouse, y_mouse, h.offsetX, h.offsetY, papel);
      esta_dibujando = true;
    }
  esta_dibujando = true; //cambié esto a true/false para que se vea más profesional ya que es más fácil de lidiar con esto en código soy lesbiana
}

function soltar_mouse(h)
{
  if(esta_dibujando == true)
  {
  //  console.log("WORKING");
    dibujarLinea(color_a_usar, grosor_conmouse, x_mouse, y_mouse, h.offsetX, h.offsetY, papel);
    esta_dibujando = false;
  }
}

//AQUI CAMBIÉ "LAYERY" Y "LAYERX" POR "OFFSETX" Y "OFFSETY"
function mover_mouse(h)
{
  var color_final = color_a_usar;
  if(esta_dibujando == true)
  {
    //console.log("x_mouse: " + x_mouse);
    //console.log("layerX " + h.offsetX);
    //console.log("y_mouse " + y_mouse);
    //console.log("layerY " + h.offsetY);
    dibujarLinea(color_final, grosor_conmouse, x_mouse, y_mouse, h.offsetX, h.offsetY, papel);
    x_mouse = h.offsetX;
    y_mouse = h.offsetY;
  }
  //console.log("x " + h.offsetX);
  //console.log("y " + h.offsetY);
}

//velocidades de cuando usas las teclas.
var velocidad_x05 = document.getElementById("x0.5");
var velocidad_x1 = document.getElementById("x1");
var velocidad_x15 = document.getElementById("x1.5");
var velocidad_x2 = document.getElementById("x2");
var movimiento_de_la_tecla;

//Eventos de elegir la velocidad al dibujar con las teclas
velocidad_x05.addEventListener("click", velocidad_lenta);
velocidad_x1.addEventListener("click", velocidad_normal);
velocidad_x15.addEventListener("click", velocidad_rapida);
velocidad_x2.addEventListener("click", velocidad_muy_rapida);

//funciones de velocidades.
function velocidad_lenta()
{
  if(velocidad_x05.value)
  {
    movimiento_de_la_tecla = 1;
  }
}
function velocidad_normal()
{
  if(velocidad_x1.value)
  {
    movimiento_de_la_tecla = 3;
  }
}
function velocidad_rapida()
{
  if(velocidad_x15.value)
  {
    movimiento_de_la_tecla = 7;
  }
}
function velocidad_muy_rapida()
{
  if(velocidad_x2.value)
  {
    movimiento_de_la_tecla = 11;
  }
}

document.addEventListener("keydown", dibujar_teclado);  //Evento para dibujar con las teclas

var x = 150;  //variables para recordar el ultimo punto en el que me quede, (con las teclas).
var y = 150;

//funcion que hace que se pueda dibujar con las teclas del teclado
function dibujar_teclado(tecla_oprimida)
{
    //console.log(tecla_oprimida);
  var color_final = color_a_usar;
  var movimiento  = movimiento_de_la_tecla;
      //console.log(movimiento_de_la_tecla);
  var grosor_final = grosor;
    //console.log(grosor_final);
  if(tecla_oprimida.code == teclas.UP)
  {
    dibujarLinea(color_final, grosor_final, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    console.log(y);
  }
  switch (tecla_oprimida.code)
  {  //este switch es como para que el "if" no sea tan largo y se pueda agrupar a travez de los casos que cambian
    case teclas.UP:
        dibujarLinea(color_final, grosor_final, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
    case teclas.DOWN:
        dibujarLinea(color_final, grosor_final, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
    case teclas.LEFT:
        dibujarLinea(color_final, grosor_final, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
    case teclas.RIGHT:
        dibujarLinea(color_final, grosor_final, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
    default:  //esto es como el else (el default)
          console.log("otra tecla");
        break;
  }
}

//funcion que ejecuta las lineas del canvas (dibujo)
function dibujarLinea(color, grosor_de_linea, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor_de_linea;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
  //console.log("Linea dibujada en " + x_inicial);
}
