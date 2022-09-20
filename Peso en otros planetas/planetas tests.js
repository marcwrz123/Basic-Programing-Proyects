function ejecutar() //funcion que se ejecuta con el boton
{

  var peso = document.getElementById("peso").value;  //peso del usuario
  var planetSelected = document.getElementById("select").value;  //planeta seleccionado
  console.log("Planeta " + planetSelected);
  console.log("peso " + peso);
  var gravedad = {   //valores de gravedad de cada planeta
    JUPITER: 24.79,
    VENUS: 8.87,
    MERCURIO: 3.7,
    MARTE: 3.72,
    TIERRA: 9.81,
    SATURNO: 10.44,
    URANO: 8.87,
    NEPTUNO: 11.15
  }
  var write;
  var pesoFinal;
  var content = document.getElementById("result");
  //console.log(gravedad);
  var p = document.getElementById("mainImage");
  var espacio = document.getElementById("imagen");
  //var image = new Image();
  //image.src = "foto1.jpg";
  //espacio.appendChild(image);
  //espacio.src = "foto1.jpg";
  //p.innerHTML += document.appendChild(espacio);

  switch (planetSelected) {          //condicionales para cada planeta
    case "Jupiter":
    pesoFinal = (peso * gravedad.JUPITER / gravedad.TIERRA).toFixed(2);  //calculo para calcular tu peso, dependiendo el planeta.
    write = true;  //condicion para que se afirme que se va a ascribir lo obtenido en este case.
    //let image = new Image();
    //image.src = "foto1.jpg";
    //espacio.appendChild(image);
    console.log(pesoFinal);
      break;
    case "Venus":
    pesoFinal = (peso * gravedad.VENUS / gravedad.TIERRA).toFixed(2);
    write = true;
    let image = new Image();
    image.src = "foto2.jpg";
    espacio.appendChild(image);
    console.log("workin");
      break;
    case "Mercurio":
    pesoFinal = (peso * gravedad.MERCURIO / gravedad.TIERRA).toFixed(2);
    write = true;
    console.log("workin");
      break;
    case "Marte":
    pesoFinal = (peso * gravedad.MARTE / gravedad.TIERRA).toFixed(2);
    write = true;
    console.log("workin");
      break;
    case "Tierra":
    pesoFinal = peso;
    content.innerHTML += "<li>Tu peso en la <strong>" + planetSelected + "</strong> es de " + pesoFinal + " KG</li> <br>";  //que escribe el texto, solo que con la palabra "la tierra".
    write = false;
    console.log("workin");
      break;
    case "Saturno":
    pesoFinal = (peso * gravedad.SATURNO / gravedad.TIERRA).toFixed(2);
    write = true;
    console.log("workin");
      break;
    case "Urano":
    pesoFinal = (peso * gravedad.URANO / gravedad.TIERRA).toFixed(2);
    write = true;
    console.log("workin");
      break;
    case "Neptuno":
    pesoFinal = (peso * gravedad.NEPTUNO / gravedad.TIERRA).toFixed(2);
    write = true;
    console.log("workin");
      break;
  }

  if (write == true)
  {
    content.innerHTML += "<li>Tu peso en <strong>" + planetSelected + "</strong> es de " + pesoFinal + " KG</li> <br>" ;  //etiqueta "p" en la que se va a escribir todo.
  }
}
