//Exemplo prático (chamada de API simulada)

async function buscarDados() {
  try {
    // Simulando uma chamada de API que demora 3 segundos
    const resposta = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Dados recebidos!");
      }, 3000);
    });
    
    console.log(resposta); // "Dados recebidos!" depois de 3 segundos
    
  } catch (erro) {
    console.log("Deu ruim:", erro);
  }
}

buscarDados();