var rangoNumeros = document.getElementById("rango");
var b = document.getElementById("GO");
var boton = b.addEventListener("click", empezar);

var numeros;

function empezar()  //funcion del boton que recoge la info del input de type text.
{
  numeros = parseInt(rangoNumeros.value);
  //console.log(numeros);
  escribir();
}

var divisible = false;

function escribir()  //funcion que escribira los numeros dependiendo el numero de veces que se halla elegido
{
  console.log(numeros);
  for (var i = 1; i <= numeros; i++)
  {
    divisible = false;
    if(i % 3 == 0)
    {
      document.write("Fizz ");
      divisible = true;
    }

    if (i % 5 == 0)
    {
      document.write("Buzz");
      divisible = true;
    }

    if(!divisible)  //si no es divisible verdadero, entonces se ejecuta el codigo
    {
      document.write(i);
    }
    document.write("<br>");
  }
}
