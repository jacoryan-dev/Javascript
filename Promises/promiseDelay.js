//Exemplo com setTimeout (simulando atraso):

const esperar3Segundos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Passaram 3 segundos!");
  }, 3000);
});

esperar3Segundos
  .then((mensagem) => {
    console.log(mensagem); // "Passaram 3 segundos!"
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  });
// O código não para de rodar, só a Promise está "esperando".
// Depois de 3 segundos, ela chama o resolve e executa o .then().

