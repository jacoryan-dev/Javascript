const funcoes = require('./funcoes-auxiliares')

console.log(funcoes);

console.log(funcoes.gets());

//Agora com destructuring:

//Exemplo:

const pessoa = {
    name: 'Ryan',
    age: 22
}

const {name, age} = pessoa; // Este código é equivalente a este: const idade = pessoa.idade;  porém o primeiro tem uma sintaxe mais limpa e permite adicionar mais de um atributo.
console.log(name, age);

/* Por que usar?
Facilidade de acesso: Em vez de escrever pessoa.name ou pessoa.age várias vezes, 
você pode simplesmente usar name e age após a destructuring.
Código mais limpo e legível: Quando você precisa de várias propriedades de um objeto, o código fica menos repetitivo.*/



// Agora no nosso programa:

const {gets, print} = require('./funcoes-auxiliares')

print(gets());