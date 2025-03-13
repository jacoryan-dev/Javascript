/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um
funcionário.
 Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
 O salário a ser transferido é calculado da seguinte maneira:

valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional
dos benefícios.

// Para calcular o percentual de imposto segue as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00%
*/

const {gets, print} = require('./funcao-auxiliar-d3');

const salarioBruto = gets(); //entradas[0]
const beneficio = gets(); //entradas[1]


//1) função para calcular o imposto
function calcularImposto(salario){
    let imposto = null;
    if(salarioBruto > 0 && salarioBruto <= 1100){
        imposto = (5/100) * salarioBruto;
    
    }else if(salarioBruto > 1100 && salarioBruto <= 2500){
        imposto = (10/100) * salarioBruto;
       
    }else if(salarioBruto > 2500){
        imposto = (15/100) * salarioBruto;

    }
    return imposto;

}
const imposto = calcularImposto(salarioBruto);


//2) função para calcular salario final
function calcularSalario(salarioBruto, valorImposto, beneficio){
    const salarioLiquido = salarioBruto - valorImposto + beneficio;
    return salarioLiquido;
}
const salarioLiquido = calcularSalario(salarioBruto, imposto, beneficio);

print('Salario bruto: R$'+ salarioBruto);
print('Imposto: R$'+ imposto);
print('Benefício: R$'+ beneficio);
print('Salario líquido: R$'+ salarioLiquido);