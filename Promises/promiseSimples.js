//Exemplo simples:

const promessa = new Promise((resolve, reject) => {
  let tudoCerto = true;
  
  if (tudoCerto) {
    resolve("Deu bom!");
  } else {
    reject("Deu ruim!");
  }
});

// Consumindo a Promise:
promessa
  .then((value) => {
    console.log(value); // "Deu bom!"
  })
  .catch((error) => {
    console.log(error); // "Deu ruim!"
  });
//.then() → o que fazer quando der certo (resolve).
//.catch() → o que fazer se der erro (reject).