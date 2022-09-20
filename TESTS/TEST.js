class Billete
{
	// atributos
	constructor (valor, cantidad)
	{
		this.valor = valor;
		this.cantidad = cantidad;
	}

	// metodos
	mostrar()
	{
    var imagen = document.createElement('img');
		imagen.src = "billete_100.png";
		return imagen;
	}
}

var billete = new Billete(50,5);

var res = document.getElementById("resultado");

for(var i = 0; i < 5; i++)
{
	var nuevoBillete = billete.mostrar();
	res.appendChild(nuevoBillete);
}
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
