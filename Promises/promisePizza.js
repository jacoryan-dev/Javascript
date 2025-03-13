//Criando uma função que retorna Promise:

function pedirPizza(sabor) {
  return new Promise((resolve, reject) => {
    if (!sabor) {
      reject("Nenhum sabor escolhido!");
    }

    setTimeout(() => {
      resolve(`Pizza de ${sabor} pronta!`);
    }, 2000);
  });
}

// Usando a função:
pedirPizza("Calabresa")
  .then((resposta) => console.log(resposta)) // "Pizza de Calabresa pronta!" após 2 seg
  .catch((erro) => console.log("Erro:", erro));