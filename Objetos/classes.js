// Classes são modelos de objetos

class pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos` )

    }
}

const jaco = new pessoa('Jacó', 22);
const luz = new pessoa('Luz', 20);
 
luz.descrever();
jaco.descrever();