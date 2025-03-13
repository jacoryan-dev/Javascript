O problema que eles resolvem
Antes do async e await, a gente tinha que lidar com callbacks (que podiam virar aquele callback hell) ou promises (que ficavam com vários .then() encadeados).

🔧 O async/await deixa o código mais limpo, parecendo síncrono, mas continua assíncrono por baixo dos panos!

O que é async?
Quando você coloca async na frente de uma função, ela automaticamente retorna uma Promise.
Mesmo que você retorne um valor simples, ele vira uma Promise.
Exemplo:

async function minhaFuncao() {
  return "Hello!";
}

minhaFuncao().then(console.log); // "Hello!"
➡️ O valor "Hello!" vira uma Promise resolvida.

O que é await?
O await só pode ser usado dentro de uma função async.
Ele pausa a execução da função async até que a Promise seja resolvida.
Depois, ele retorna o resultado dessa Promise.

Exemplo simples com async/await:

Antes, com Promises puras:

function pegarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Jacob");
    }, 2000);
  });
}

pegarUsuario().then((usuario) => {
  console.log(usuario); // Jacob (depois de 2 segundos)
});

Com async/await (muito mais simples!):

async function mostrarUsuario() {
  const usuario = await pegarUsuario(); // espera a Promise resolver
  console.log(usuario); // Jacob (depois de 2 segundos)
}

mostrarUsuario();

O que acontece aqui?
pegarUsuario() devolve uma Promise que resolve depois de 2 segundos.
Na mostrarUsuario(), usamos await para esperar o resultado da Promise antes de continuar.
O console.log só é executado depois que a Promise termina.

Exemplo prático (chamada de API simulada)

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

try/catch captura erros (como se fosse catch nas Promises).

O await espera a resposta, sem precisar de .then().
Regras importantes:
✅ await só funciona dentro de funções async
✅ O código não trava a página, só aquela função espera a Promise
✅ Você pode ter vários await seguidos, como se fosse código síncrono

Metáfora rápida:
👉 Imagina que você pede uma pizza (Promise).
👉 Com await, você espera sentado, mas não precisa se preocupar com o entregador. Quando ele chega, você continua seu jantar!