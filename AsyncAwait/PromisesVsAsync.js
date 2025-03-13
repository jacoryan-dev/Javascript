//Com Promises:

function buscarDados() {
    fetch('https://api.exemplo.com/dados')
        .then(resposta => resposta.json())
        .then(dados => console.log(dados))
        .catch(erro => console.error("Erro:", erro));
}

//Com async/await:

async function buscarDados() {
    try {
        let resposta = await fetch('https://api.exemplo.com/dados');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro:", erro);
    }
}