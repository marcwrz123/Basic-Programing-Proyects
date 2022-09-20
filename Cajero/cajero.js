var b = document.getElementById("boton");
b.addEventListener("click", boton);
//console.log(boton);

class billete //clase en el que se va a cuardar el valor y cantidad del billete de la caja y el que se entrega
{
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
  mostrar() //funcion que nos mostrara el contenido que queremos ense;ar segun la plata del array entregado.
  {
    switch (this.valor) {  //switch que hace que se repita varias veces un appendchild con imagen
      case 100:
        if (this.cantidad > 0) {
          var imagen = document.createElement("img");  //se crea una imagen
          imagen.src = imagenesDeBilletes[100];   //se le asigna su src
          console.log(imagen.src);
          for (var i = 0; i < this.cantidad; i++) {  //se crea un ciclo que dependiendo el numero de billete escogido se repetira
            var replace = dib.appendChild(imagen);
            dib.innerHTML += "";  //se debe de poner esto para que se pueda repetir la imagen, si no, no lo hace.
          }
          //dib.removeChild(dib.appendChild(imagen));
          return imagen;  //se devuelve la imagen, en este caso el billete de 100
        }
        break;
      case 50:
        if (this.cantidad > 0) {
          var imagen = document.createElement("img");
          imagen.src = imagenesDeBilletes[50];
          console.log(imagen.src);
          for (var i = 0; i < this.cantidad; i++) {
            dib.appendChild(imagen);
            dib.innerHTML += "";
          }
          return imagen;
        }
        break;
      case 20:
        if (this.cantidad > 0) {
          var imagen = document.createElement("img");
          imagen.src = imagenesDeBilletes[20];
          console.log(imagen.src);
          for (var i = 0; i < this.cantidad; i++) {
            dib.appendChild(imagen);
            dib.innerHTML += "";
          }
          return imagen;
        }
        break;
      case 10:
        if (this.cantidad > 0) {
          var imagen = document.createElement("img");
          imagen.src = imagenesDeBilletes[10];
          console.log(imagen.src);
          for (var i = 0; i < this.cantidad; i++) {
            dib.appendChild(imagen);
            dib.innerHTML += "";
          }
          return imagen;
        }
        break;
      case 5:
        if (this.cantidad > 0) {
          var imagen = document.createElement("img");
          imagen.src = imagenesDeBilletes[5];
          console.log(imagen.src);
          for (var i = 0; i < this.cantidad; i++) {
            dib.appendChild(imagen);
            dib.innerHTML += "";
          }
          return imagen;
        }
        default:
        dib.innerHTML = "No hay billetes de 1 dolar bobi";
        document.getElementById("resultadoMal").innerHTML = "";
    }
  }
}

var unDolar;
var imagenesDeBilletes = [];   //donde se guardan el src de los billetes
imagenesDeBilletes[100] = "billete_100.png";
imagenesDeBilletes[50] = "billete_50.png";
imagenesDeBilletes[20] = "billete_20.png";
imagenesDeBilletes[10] = "billete_10.png";
imagenesDeBilletes[5] = "billete_5.png";
//console.log(imagenesDeBilletes);

var caja = []; //valores del billete que estan en caja, disponibles para sacar
caja.push(new billete(100, 5));
caja.push(new billete(50, 3));
caja.push(new billete(20, 2));
caja.push(new billete(10, 2));
caja.push(new billete(5, 10));
console.log(caja);

var entregado = []; //arrays donde se van a guardar el valor y la cantidad de billetes que se debe de entregar.
var usuario = document.getElementById("numero"); //input de type number.
var dib = document.getElementById("resultado");  //<p>

function boton() {
  var dinero = parseInt(usuario.value); //valor del dinero dependiendo del valor anteriormente ingresado en el input type number
  console.log("dinero " + dinero);
  var papeles; //cantidad de papeles que se van a sacar de cada billete de cada valor
  var div; //resultado de la division de del dinero y el valor del billete.
  //ciclo en el que los valores de caja se ponene en bill, por lo que bill tiene valor y cantidad.
  for (var bill of caja) {
    if (dinero > 0)
    {
      div = Math.floor(dinero / bill.valor);
      console.log(bill.valor);
      console.log(bill.cantidad);
      if (div > bill.cantidad) {
        papeles = bill.cantidad;
      } else {
        papeles = div;
      }
      console.log("papeles " + papeles);
      entregado.push(new billete(bill.valor, papeles)); //esto se pondra en los arrays de "entregado" cuantas veces el ciclo sea necesario
      dinero = dinero - (bill.valor * papeles); //ecuacion para que la cantidad se cambie dependiendo del dinero que sobre para completar el valor a retirar

      //condicionales para que cambie la cantidad de dinero en caja, segun el bill valor en el que se este ejecutando el codigo en ese momento.
      switch (bill.valor) {
      	case 100:
      		var caja100C = bill.cantidad - papeles;
      		console.log(caja100C);
      		caja[0] = new billete(100, caja100C);  //aqui se asigna el nuevo balor de caja
      		break;
      	case 50:
      		var caja50C = bill.cantidad - papeles;
      		console.log(caja50C);
      		caja[1] = new billete(50, caja50C);
      		break;
      	case 20:
      		var caja20C = bill.cantidad - papeles;
      		console.log(caja100C);
      		caja[2] = new billete(20, caja20C);
      		break;
      	case 10:
      		var caja10C = bill.cantidad - papeles;
      		console.log(caja10C);
      		caja[3] = new billete(10, caja20C);
      		break;
      	case 5:
      		var caja5C = bill.cantidad - papeles;
      		console.log(caja5C);
      		caja[4] = new billete(5, caja5C);
      		break;
      }
    }
  }
  console.log(caja);

  if (dinero > 0) //condicional para cuando sobra dinero de lo pedido y no se puede entregar mas
  {
    document.getElementById("resultadoMal").innerHTML = "Ya no queda plata bobis, la maxima cantidad que se puede sacar es de $745";
    console.log("todo mal");
  }
  for (e of entregado) //condicion para que lo que se guarda en las arrays de entregado se guarden en e y asi poder ejecutar la funcion mostrar(), de la class billete.
  {
    e.mostrar();  //se ejecuta cada array de entregado, 1 x 1.
  }
}
