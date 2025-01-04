/* 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores
Imprima o maior número par e o menor número impar.

Exemplo:

Entrada:
5
3
4
1
10
8

Saída:
Maior número par: 10
Menor número impar: 1 */

const {gets, print} = require('./funcao-auxiliar-d2');

const N = gets(); //quantidade de números da lista

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < N ; i++) {
    const numero = gets();

    if(numero % 2 === 0 && numero > maiorPar){
        maiorPar = numero;

    }else if (numero % 2 !== 0 && (numero < menorImpar || menorImpar === null)){
        menorImpar = numero;

    } 
    
}

print('Maior número par: '+ maiorPar);
print('Menor número impar: '+ menorImpar);



