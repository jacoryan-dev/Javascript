//cire uma lista de numeros e imprima cada numero par encontrado

const numeros = [1,2,3,4,89,64,90,23,22,48,0,5,6,7,8,9,10];

console.log('São números pares: ');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
    
}