const jaco = {
    nome: 'Jacó Ryan S. Souza',
    idade: 22,
    valor: 'inútil'
};

jaco.altura = 1.90;

delete jaco.valor;

console.log(jaco.nome);
console.log(jaco.idade);
console.log(jaco);

