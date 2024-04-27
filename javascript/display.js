class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual= ``;
        this.valorAnterior= ``;
    }
    addNumero(numero){
        if(numero === `.`&& this.valorActual.includes(`.`))return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = ``;
        this.valorAnterior = ``;
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador(this.tipoOperacion)(valorAnterior, valorActual);

    }
    resolver(tipo){
        this.tipoOperacion !== 
    }
}