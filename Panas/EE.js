var fotos = [];
fotos["....................................... RUBEN ......................................."] = "ruben.jpeg";
fotos["....................................... JOSE MIGUEL ......................................."] = "jose.jpeg";
fotos["....................................... JESUS ......................................."] = "jesus.jpeg";
fotos["....................................... OSCAR ......................................."] = "oscar.jpeg";

class panas
{
  constructor(n, d)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.descripcion = d;

    this.imagen.src = fotos[this.nombre];
  }
  mostrar()
  {
    document.write("<hr>");
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write( "<strong>" + this.nombre + "</strong>" +"<br>");
    document.write(this.descripcion);
    document.write("</p>")
  }
}

var personajes = [];

personajes.push( new panas("....................................... RUBEN .......................................", "Ruben borracho, WTF ruben borracho, alguien que le de un encebollado de a dolar") );
personajes.push( new panas("....................................... JOSE MIGUEL .......................................", "Jose Miguel si fuera cristiano y creyera en diosito, alguien que le traiga una religiosa") );
personajes.push( new panas("....................................... JESUS .......................................", "WTF, Jesus mandariniando, Dios mio JESUS QUE HACES, NOOOOOOOOOOOO") );
personajes.push( new panas("....................................... OSCAR .......................................", "Oscar rocolero, WTF oscar rocolero, digalen que toque un de Julio Jaramillo") );

function boton()
{
  for(p in personajes)
  {
    personajes[p].mostrar();
  }
}
