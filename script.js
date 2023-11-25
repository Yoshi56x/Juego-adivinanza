let numeroRamdon = Math.floor(Math.random()*100)+1;
let mensaje = document.getElementById('mensaje')
let numero = document.getElementById('numeroEntrada')

function Comprobar() {
    let numeroEntrada= parseInt(numero.value)
if (numeroEntrada < 1 || numeroEntrada > 100|| isNaN(numeroEntrada)) {
    mensaje.textContent ="ingresa un numero valido del 1 al 100"
    mensaje.style.color='black'
    return
}

    if (numeroEntrada == numeroRamdon) {
        mensaje.textContent = "Eres un crack"
        mensaje.style.color='green'
    }else if (numeroEntrada > numeroRamdon) {
        mensaje.textContent= "Te pasaste intenta con un numero menor"
        mensaje.style.color='red'
    }else if (numeroEntrada < numeroRamdon) {
        mensaje.textContent="Estas lejos intenta con un numero mayor a este"
        mensaje.style.color='red'
    };

     
};