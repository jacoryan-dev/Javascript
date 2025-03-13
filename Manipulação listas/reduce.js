const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduz a lista a um único elemento
const somadeTodosOsNumeros = lista.reduce((previus, current) => {
    console.log(previus, current)
    return previus + current
})

console.log(somadeTodosOsNumeros)