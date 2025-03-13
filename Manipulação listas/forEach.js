const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Essa sintaxe
lista.forEach( (value, i, listRef) => {
    console.log(value + i)
})



//Tem o mesmo efeito que essa
for (let i = 0; i < lista.length; i++) {
    const element = array[i];
    cb(element, i, lista)
    
}


//OBS: o for é mais rápido e melhor para grande quantidades de elementos