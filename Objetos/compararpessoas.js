class pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }
    
}

const jaco = new pessoa('Jacó', 22);
const luz = new pessoa('Luz', 20);

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(p1.nome + ' é uma pessoa mais velha que ' + p2.nome);
    
    }else if(p2.idade > p1.idade){
        console.log(p2.nome + ' é uma pessoa mais velha que ' + p1.nome);

    }else {
        console.log(p1.nome + ' tem a mesma idade que ' + p2.nome) ;

    }
}

compararPessoas(jaco, luz);