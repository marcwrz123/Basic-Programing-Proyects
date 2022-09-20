var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
//console.log(imagenes);

class Pakiman
{
  constructor(n, v, a)  //"this" es un indicador de la instancia de la clase "cauchin"
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];   // por ejemplo si se elige pokacho, ese se pone en la variable "n", que es el this.nombre, que dentro del array daria igual a la src de la imagen del pollo.
  }
  mostrar() //funcion que muestra todo
  {
    document.write("<hr>");
    document.body.appendChild(this.imagen);
    document.write("<br>" + "<strong>" + this.nombre + "</strong> <br>");
    document.write("<strong>Cantidad de vida: </strong>" + this.vida + "<br>");
    document.write("<strong>Poder de Ataque: </strong>" + this.ataque);
  }
}

var coleccion = [];

coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pokacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );
//console.log(cauchin, pokacho, tocinauro);

function boton()
{
  for(var p in coleccion) //cada variable de coleccion se coloca en la "p" (solo funciona cuando en "[]" se colocan numeros y no strings)
  {
    coleccion[p].mostrar();
  }
}
