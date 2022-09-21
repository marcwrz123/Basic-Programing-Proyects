function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
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

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
