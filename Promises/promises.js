const promessaNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessaNumeroQualquer
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('Finalizou')

})