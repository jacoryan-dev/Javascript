//Com Promises puras:

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
//Com async/await (muito mais simples!):

async function mostrarUsuario() {
  const usuario = await pegarUsuario(); // espera a Promise resolver
  console.log(usuario); // Jacob (depois de 2 segundos)
}

mostrarUsuario();