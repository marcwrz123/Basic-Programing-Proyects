function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo');
    let ratigueya = document.getElementById('ratigueya');
    let langostelvis = document.getElementById('langostelvis');
    let tucapalma = document.getElementById('tucapalma');
    let pydos = document.getElementById('pydos');
}
function seleccionarMascotaJugador() {
    switch (true) {
        case hipodoge.checked:
            console.log('hi1');
            break;
        case capipepo.checked:
            console.log('hi2');
            break;
        case ratigueya.checked:
            console.log('hi3');
            break;
        case langostelvis.checked:
            console.log('hi4');
            break;
        case tucapalma.checked:
            console.log('hi5');
            break;
        case pydos.checked:
            console.log('hi6');
            break;                   
        default:
            console.log('Not Really');
            break;
    }
}

window.addEventListener('load', iniciarJuego);
