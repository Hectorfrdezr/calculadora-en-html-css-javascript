const displayValoranAnterior = document.querySelector(`#valor-anterior`);
const displayValorActual = document.querySelector(`#valor-actual`);
const bntNumero = document.querySelectorAll(`.numero`);
const bntOperador = document.querySelectorAll(`.operador`);
const backspace = document.querySelector(`.col-1`);
const clear = document.querySelector(`.col-2`);


const display = new Display(displayValoranAnterior, displayValorActual);

bntNumero.forEach(boton =>{
    boton.addEventListener(`click`, () => display.addNumero(boton.innerHTML));
});
backspace.addEventListener(`click`, () => display.borrar());

clear.addEventListener(`click`,() =>display.borrarTodo());

bntOperador.forEach(boton => {
    boton.addEventListener(`click`, () => display.resolver(boton.value));
})


 