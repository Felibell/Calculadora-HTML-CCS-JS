const displayValorAnterior = document.getElementById('Valor-Anterior');
const displayValorActual = document.getElementById('Valor-Actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display (displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>display.agregarNumero(boton.innerHTML));

});


