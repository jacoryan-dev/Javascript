Esse código mostra como callbacks funcionam com funções assíncronas no JavaScript.

O que o código faz?
Ele espera 3 segundos e depois muda o conteúdo do elemento <h1 id="demo"> para o texto:
👉 "I love You !!"

Linha por linha:

<!DOCTYPE html>
<html>
<body>
➡️ Começo do documento HTML básico.


<h1>JavaScript Functions</h1>
<h2>setTimeout() with a Callback</h2>
➡️ Títulos explicando o que vai acontecer.
➡️ setTimeout() é uma função que espera um tempo e depois executa algo.

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>
➡️ Mensagem informando que vai acontecer algo em 3 segundos.
🕒 3000 milliseconds = 3 segundos.


<h1 id="demo"></h1>
➡️ Esse é o elemento onde o texto vai aparecer depois dos 3 segundos.
➡️ Começa vazio.


<script>
➡️ Começa o JavaScript.

O setTimeout:

setTimeout(myFunction, 3000);
➡️ setTimeout é uma função interna do JS que faz isso:

Espera um tempo determinado.
Depois chama a função que você passar como argumento.
📌 Aqui:

A função passada é myFunction.
O tempo é 3000 milissegundos (3 segundos).
A função chamada depois de 3 segundos:

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
➡️ Depois dos 3 segundos, ela é chamada.
➡️ Ela pega o elemento com id="demo" e altera o conteúdo para "I love You !!".

Fluxo completo:
A página carrega.
Exibe a mensagem:
➡️ "Wait 3 seconds (3000 milliseconds) for this page to change."
O setTimeout espera 3 segundos.
Depois ele chama a função myFunction.
A função muda o texto do <h1 id="demo"> para:
👉 "I love You !!"
O que é a callback aqui?
🔧 A função myFunction é a callback do setTimeout.
Porque:
✅ Você passa ela como argumento para setTimeout.
✅ E o JavaScript chama ela de volta depois do tempo que você definiu.

Visão geral:
👉 setTimeout funciona de forma assíncrona.
👉 Ele não trava o código, apenas agenda para rodar depois de um tempo.
👉 A função que ele chama depois do tempo é a callback.

