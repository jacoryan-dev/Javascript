/*Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98

*/

const {get, imprimir} = require('./funcoes-auxiliares-2');

/*const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const sorteado = get();
    numeroSorteados.push(sorteado)
    
}

imprimir(numeroSorteados);

let maiorNumero = 0;

for (let i = 0; i < numeroSorteados.length; i++) {
    const sorteado = numeroSorteados[i];
    if(sorteado > maiorNumero){
        maiorNumero = sorteado;
    }
    
}

imprimir('O maior número é '+ maiorNumero);*/


//simplificando a lógica:

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const sorteado = get();
    if(sorteado > maiorValor){
        maiorValor = sorteado;
    }
    
}

imprimir('O maior número é '+maiorValor); //Nessa versão de código não é preciso criar uma lista para percorrelá basta percorrer o get.