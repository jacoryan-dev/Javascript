
const entradas = [5, 50, 10, 98, 23];

let i = 0;


function get(){
    const valor = entradas[i];
    i++;
    return valor;

}

function imprimir(texto){
    console.log(texto)
}

module.exports = {get, imprimir}