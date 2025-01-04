const peso = 100;
const altura = 1.90;

const imc = peso / Math.pow(altura, 2);

/*Abaixo do peso: IMC menor que 18,5 
Baixo: IMC entre 18,5 e 24,9 
Sobrepeso: IMC entre 25 e 29,9 
Obesidade grau I: IMC entre 30 e 34,9 
Obesidade grau II: IMC entre 35 e 39,9 
Obesidade grau III (obesidade mórbida): IMC acima de 40*/

console.log(imc)
if(imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 25){
     console.log('Peso normal');
}else if(imc >= 25 && imc < 30){
    console.log('Sobrepeso');
}else if(imc >= 30 && imc < 35){
    console.log('Obesidade grau I');
}else if(imc >= 35 && imc < 40){
    console.log('Obesidade grau II');
}else {
    console.log('Obesidade grau III (obesidade mórbida)');
}