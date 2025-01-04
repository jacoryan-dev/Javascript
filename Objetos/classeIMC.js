class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.altura = altura;
        this.nome = nome;
        this.peso = peso;

    }

    calcularIMC(){
        return this.peso/ Math.pow(this.altura, 2);
        
    }
    

    classificarIMC(){
        const imc = this.calcularIMC();
        
        if(imc < 18.5){
            return 'Abaixo do peso';
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso normal';
        }else if(imc >= 25 && imc < 30){
            return 'Sobrepeso';
        }else if(imc >= 30 && imc < 35){
            return 'Obesidade grau I';
        }else if(imc >= 35 && imc < 40){
            return 'Obesidade grau II';
        }else {
            return 'Obesidade grau III (obesidade mórbida)';
        }

    }

}


const luz = new Pessoa('Luz', 50, 1.65);
const jaco = new Pessoa('Jacó', 100, 1.90)

console.log('Meu nome é ' + jaco.nome + ' e meu IMC é ' + jaco.calcularIMC() + ' classificado como ' + jaco.classificarIMC());
console.log('Meu nome é ' + luz.nome + ' e meu IMC é ' +luz.calcularIMC() + ' classificado como ' + luz.classificarIMC());
