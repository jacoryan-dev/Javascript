/*1) Faça um programa que receba a média de um aluno.
I

Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

Exemplo:
Entrada:
5.5
Saida:
Recuperação

Caso a média seja < 5 imprima "Reprovado"*/


const {gets, print} = require('./funcao-auxiliar-d1');

const media = gets();
function classificarMedia(mediafinal){

    if(mediafinal >= 5 && mediafinal < 7){
        print("Recuperação");

    }else if(mediafinal >= 7){
        print("Aprovado!");
    }else{
        print("Reprovado!");
    }

}

classificarMedia(media);




