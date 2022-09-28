let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
}


function seleccionarMascotaJugador() {
    //mascotas
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo');
    let ratigueya = document.getElementById('ratigueya');
    let langostelvis = document.getElementById('langostelvis');
    let tucapalma = document.getElementById('tucapalma');
    let pydos = document.getElementById('pydos');
    let spanMascotaJugador = document.getElementById("mascota-jugador");    //span
    
    switch (true) {
        case hipodoge.checked:
            spanMascotaJugador.innerHTML = 'Hipodoge';
            break;
        case capipepo.checked:
            spanMascotaJugador.innerHTML = 'Capipepo';
            break;
        case ratigueya.checked:
            spanMascotaJugador.innerHTML = 'Ratigueya';
            break;
        case langostelvis.checked:
            spanMascotaJugador.innerHTML = 'Langostelvis';
            break;
        case tucapalma.checked:
            spanMascotaJugador.innerHTML = 'Tucapalma';
            break;
        case pydos.checked:
            spanMascotaJugador.innerHTML = 'Pydos';
            break;                   
        default:
            spanMascotaJugador.innerHTML = '';
            break;
    }
        seleccionarMascotaEnemigo();
}
    
function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');    //span
    let ataqueAleatorio = aleatorio(1,6) //1H, 2C, 3R, 4L, 5T, 6P
    switch (ataqueAleatorio) {
        case 1:
            spanMascotaEnemigo.innerHTML = 'Hipodoge';
            break;
        case 2:
            spanMascotaEnemigo.innerHTML = 'Capipepo';
            break;
        case 3:
            spanMascotaEnemigo.innerHTML = 'Ratigueya';
            break;
        case 4:
            spanMascotaEnemigo.innerHTML = 'Langostelvis';
            break;        
        case 5:
            spanMascotaEnemigo.innerHTML = 'Tucapalma';
            break;
        case 6:
            spanMascotaEnemigo.innerHTML = 'Pydos';
            break;
    }
}

//Ataques del player
function ataqueFuego() {
    ataqueJugador = 'FUEGO'; 
    console.log('player attack ' + ataqueJugador);
    SeleccionAtaqueEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'; 
    console.log('player attack ' + ataqueJugador);
    SeleccionAtaqueEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'; 
    console.log('player attack ' + ataqueJugador);
    SeleccionAtaqueEnemigo();
}
    //Ataque del enemigo
function SeleccionAtaqueEnemigo() {
    let attackSelection = aleatorio(3, 1);  //1F, 2A, 3T
    console.log('number ' + attackSelection);
    if (attackSelection == 1) {
        ataqueEnemigo = 'FUEGO';
    }
    else if (attackSelection == 2) {
        ataqueEnemigo = 'AGUA';
    }
    else if (attackSelection == 3) {
        ataqueEnemigo = 'TIERRA';
    }
    console.log('enemy atack ' + ataqueEnemigo);

    //Ya que aqu[i ya sabemos cual es el ataque de aliado y del enemigo por eso mandamos a llamar la funcion de crearMensaje aqui 
    crearMensaje();
}

function crearMensaje() {
    let sectionMensaje = document.getElementById('mensajes');  //seccion mensajes del html
    let parrafo = document.createElement('p');  //se crea una etiqueta (elemento) <p>
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' PENDIENTE';
    sectionMensaje.appendChild(parrafo);
}

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
