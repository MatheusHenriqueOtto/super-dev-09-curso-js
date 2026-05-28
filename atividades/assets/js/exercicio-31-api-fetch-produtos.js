const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos"

function criarProduto(){
    const nome = prompt("Digite o nome do produto");
    const preco = parseFloat(prompt("Digite o preço do produto"));
    const categoria = prompt("Digite a categoria");

    const dados = {
        id: id,
        nome: nome,
        preco: preco,
        categori: categoria
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/jason"
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json)
        .then(dados => {
            alert("Produto cadastrada")
        })
        .catch(error => {
            console.error("Erro " + error)
            alert("Ocorreu um erro ao tentar criar um produto")
        })
}

function consultarProdutos(){
    const id = parseInt(prompt("Digite um id para o produto"));
    const nome = prompt("Digite ")
}