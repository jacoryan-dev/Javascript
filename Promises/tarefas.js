 const fs = require ('fs');

 const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

 promessaDaLeituraDoArquivo
 .then((arquivo)=> arquivo.toString('UTF8'))
 .then((texto) => console.log(texto))
 .catch((error) => {console.log('Deu ruim!', error)})