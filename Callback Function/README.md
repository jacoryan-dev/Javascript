O que o código faz?
Ele soma dois números (5 e 5) e exibe o resultado no elemento <p> com o id="demo", usando uma callback function para "mostrar" o resultado.

Linha por linha:

<!DOCTYPE html>
<html>
<body>
➡️ Isso inicia o documento HTML básico.


<h1>JavaScript Functions</h1>
<h2>Callback Functions</h2>

<p>The result of the calculation is:</p>
<p id="demo"></p>
➡️ Exibe um título (h1), um subtítulo (h2) e um parágrafo explicando.
➡️ O <p id="demo"></p> é onde o resultado vai aparecer. Ele começa vazio.


<script>
➡️ Agora começa o código JavaScript.

A primeira função:

function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}
➡️ myDisplayer é uma função que recebe um valor (something) e coloca esse valor dentro do parágrafo com o id="demo".
✅ Ou seja, ela exibe algo na tela.

A segunda função:

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
➡️ myCalculator recebe dois números (num1 e num2) e uma função de callback (myCallback).
➡️ Ela soma os dois números e depois chama a callback, passando o resultado da soma (sum).
✅ Ou seja, ela calcula e deixa a responsabilidade de exibir para a callback.

Chamando a função:

myCalculator(5, 5, myDisplayer);
➡️ Aqui você chama myCalculator com três argumentos:

5 → primeiro número
5 → segundo número
myDisplayer → função callback que vai mostrar o resultado.
➡️ Dentro de myCalculator, ele soma 5 + 5, que dá 10, e depois chama:

myCallback(10); 
// que no caso é o mesmo que chamar: myDisplayer(10);
➡️ A myDisplayer então coloca esse 10 dentro do <p> com id demo:

document.getElementById("demo").innerHTML = 10;

Resumindo:
🔧 myCalculator calcula ➡️
📞 Chama myDisplayer com o resultado ➡️
🖋️ myDisplayer exibe o resultado na página.

Resultado na tela:

The result of the calculation is:
10