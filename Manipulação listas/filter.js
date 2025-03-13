const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filtra somente os elementos pares criando uma nova lista
const listaNumerosPares = lista.filter((element) => {
    return element % 2 === 0;
})

console.log(listaNumerosPares);