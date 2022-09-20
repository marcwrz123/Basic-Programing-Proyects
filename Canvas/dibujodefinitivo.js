var c = document.getElementById("canvas");
var lienzo = c.getContext("2d");
var lineas = 30;
var l = 0;
var color_de_linea = "orange";
var yi_AbajoI, xf_AbajoI, xi_ArribaI, yf_ArribaI;
var xi_ArribaD, yf_ArribaD, yi_AbajoD, xf_AbajoD;
var arriba, abajo, izquierda, derecha;
var pruebita;
var pruebita2;
var pruebita3;
var pruebita4;

while (l < lineas)
{
  yi_AbajoI = yf_ArribaI = yf_ArribaD = yi_AbajoD = 10 * l;
  xf_AbajoI = xi_ArribaD = 10 * (l + 1);
  xi_ArribaI = xf_AbajoD = 299 - (10 * l);
  dibujarLinea(color_de_linea, 1, yi_AbajoI, xf_AbajoI, 299);
  dibujarLinea(color_de_linea, xi_ArribaI, 1, 1, yf_ArribaI);
  dibujarLinea(color_de_linea, xi_ArribaD, 1, 299, yf_ArribaD);
  dibujarLinea(color_de_linea, 299, yi_AbajoD, xf_AbajoD, 299);
  l = l + 1;
}

for(l = 0; l < lineas; l++)
{
  arriba = 10 * l;
  abajo = 10 * l;
  dibujarLinea(color_de_linea, arriba, 1, abajo, 299);
}

for(l = 0; l < lineas; l++)
{
  izquierda = 10 * l;
  derecha = 10 * l;
  dibujarLinea(color_de_linea, 1, izquierda, 299, derecha);
}

for( l = 0; l < lineas; l++)
{
  pruebita = 10 * l;
  pruebita2 = 300 - (10 * l);
  dibujarLinea(color_de_linea, 0, pruebita, 300, pruebita2);
    console.log("linea " + l);
}

for( l = 0; l < lineas; l++)
{
  pruebita3 = 10 * l;
  pruebita4 = 300 - (10 * l);
  dibujarLinea(color_de_linea, pruebita3, 0, pruebita4, 300);
    console.log("linea " + l);
}

dibujarLinea(color_de_linea, 1, 1, 1, 299);
dibujarLinea(color_de_linea, 299, 299, 1, 299);
dibujarLinea(color_de_linea, 0, 300, 300, 0);

function dibujarLinea(line_Color, x_inicial, f_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = line_Color;
  lienzo.moveTo(x_inicial, f_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
