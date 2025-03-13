async function buscarDados() {
    try {
        let resposta = await fetch('https://api.exemplo.com/dados');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

buscarDados();

//await fetch(...) espera a requisição HTTP ser concluída.

//await resposta.json() espera a conversão da resposta para JSON.

//Se algo der errado, o catch captura o erro.