const entradas = [2000, 250];

let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;

}


function print(texto){
    console.log(texto);
}

//Outra forma de pegar um elemento isolado
/*function getsByi(i) {
    return entradas[i];
}

console.log(getsByi(1));  Retorna o segundo elemento: 250*/

module.exports = {gets, print};