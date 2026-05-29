const url = "https://api.franciscosensaulas.com/api/v1/empresa/produtos"

function criarProduto(){
    const id = parseInt("Digite o id do produto");
    const nome = prompt("Digite o nome do produto");
    const preco = parseFloat(prompt("Digite o preço do produto"));
    const categoria = prompt("Digite a categoria");

    const dados = {
        id: id,
        nome: nome,
        preco: preco,
        categoria: categoria
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
    const textarea = document.getElementById("tabela-mostrar");
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(empresas => {
            for (let i = 0; i < empresas.lenght; i += 1){
                const empresa = empresas[i];
                const texto = `ID: ${empresa.id} | Nome: ${empresa.nome} | Preço: ${empresa.preco} | Classificação: ${empresa.categoria}`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            console.error(`Erro: ${error}`);
            alert("Falha ao mostrar todos os produtos");
        })
}

function alterarProduto(){
    const idParaAlterar = "/"+ ((prompt("Digite o id do produto que deseja alterar")).trim());
    const urlDesejada = url + idParaAlterar;

    const novoNome = prompt("Digite o novo nome do produto");
    const novoPreco = parseInt(prompt("Digite um novo preço"));
    const novaCategoria = prompt("Digite a nova categoria");

    const dados = {
        nome: novoNome,
        preco: novoPreco,
        categoria: novaCategoria
    }

    fetch(urlDesejada, {
        method: "PUT",
        headers:{
            "Content-Type":"appliication/json"
        },
        body: JSON.stringify(dados)
    })
        .then
}
