//Uma função dentro de um objeto é chamada de método

const pessoa = {
    nome: 'Jacó Ryan Silva Souza',
    idade: 22,
    altura: 1.90,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos` )

    }
    
}

pessoa.descrever();

//Existe uma forma de acessar um atributo de um objeto através de uma string:

console.log(pessoa['altura']);

