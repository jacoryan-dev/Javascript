class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

const lista = [
  new Pessoa("Jacob"),
  new Pessoa("Mariana"),
  new Pessoa("Zé Feh"),
];

const listaNomes = [];

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.name)
    
}

console.log(listaNomes)

//Fazendo a mesma coisa usando map:

const listaNomesMaps = lista.map((element) => {
  return element.name;
});


console.log(listaNomesMaps);
