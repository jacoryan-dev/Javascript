/*A palavra-chave await só pode ser usada dentro de uma função async. 
Ela pausa a execução da função até que a Promise seja resolvida 
(ou seja, até que a operação assíncrona seja concluída). 
Enquanto isso, o código fora da função continua rodando normalmente.

Exemplo:
*/


async function exemplo() {
    console.log("Iniciando...");
    let resultado = await new Promise((resolve) => {
        setTimeout(() => resolve("Operação concluída!"), 2000);
    });
    console.log(resultado); // "Operação concluída!"
    console.log("Fim.");
}

exemplo();
console.log("Código fora da função async.");