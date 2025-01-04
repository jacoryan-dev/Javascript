function teste (){
    console.log('teste');
}

teste();

function sayMyName(name){
    console.log('Your name is ' + name);

}

sayMyName('Jacó');

function quadrado (valor){
    return valor * valor;
}

console.log('O dobro do quadrado de 10 é ' + (quadrado(10) + quadrado(10)));

function incrementarJuros(capital, juros){
    const incremento = capital * (juros / 100);
    return capital + incremento;
}

console.log(incrementarJuros(100, 12));