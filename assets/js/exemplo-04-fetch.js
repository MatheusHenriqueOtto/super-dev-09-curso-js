function cadastrarEmpresa(){
    //URL que será chamada
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    //request body
    const dados = {
        nome: "Math LTDA",
        cnpj: "19.783.600/0001-14"
    }
    // fetch é a função que permite fazer requisição do front para o back
    fetch( url, {
        method: "POST", //POST serve para cadastrar
        headers: {
            // serve para dizer a forma que está sendo enviado o dado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)// converter de objeto(dicionario) para string
    })
        .then(response => response.json()) // convertendo de string para o objeto
        .then(dado => {
            //Aqui é quando deu certo
            alert("Empresa foi cadastrada com sucesso")
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar cadastrar a empresa");
        })
}


function listarEmpresas(){
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";

    const textarea = document.getElementById("empresas");

    //limpar o textarea
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(empresas => {
            for(let i = 0; i < empresas.lenght; i++){
                const empresa = empresas[i];
                const texto = `${empresa.id} | ${empresa.nome} | ${empresa.cnpj}\n`;
                textarea.value = textarea.value + texto;
            }
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar listar as empresas");
        })
}

function apagarEmpresas(){
    const idParaApagar = parseInt(prompt("Digite o id para apagar empresa"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaApagar;

    fetch(url, {
        method: "DELETE"
    })
        .then(response => response)
        .then(dados => {
            alert("Empresa apagada com sucesso");
            listarEmpresas();
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar apagar a empresa");
        })
}

function consultarEpresaPorId(){
    const idParaConsultar = parseInt(prompt("Digite o id para consultar a empresa"));

    const url = "https://api.franciscosensaulas.com/api/v1/empresa/" + idParaConsultar;

    let textarea = document.getElementById("empresas");
    textarea.value = "";

    fetch(url)
        .then(response => response.json())
        .then(empresa => {
            const texto = `Id: ${empresa.id}\nNome: ${empresas.nome}\nCNPJ: ${empresa.cnpj}\n`;
            textarea.value = textarea.value + texto;
        })
        .catch(error => {
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar consultar a empresa");
        })
        
}

function editarEmpresas(){
    //URL que será chamada
    const url = "https://api.franciscosensaulas.com/api/v1/empresa";
    const idParaEditar = parseInt(prompt("digite o id para consultar"));
    const novoNome = prompt("Digite um novo nome");
    const novoCnpj = prompt("Digite um novo CNPJ");
    //request body
    const dados = {
        nome: novoNome,
        cnpj: novoCnpj
    }
    // fetch é a função que permite fazer requisição do front para o back
    fetch( url, {
        method: "PUT", //PUT serve para editar
        headers: {
            // serve para dizer a forma que está sendo enviado o dado
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)// converter de objeto(dicionario) para string
    })
        .then(response => response) // convertendo de string para o objeto
        .then(empresa => {
            //Aqui é quando deu certo
            alert("Empresa foi alterada com sucesso")
        })
        .catch(error => {
            // Código executado quando ocorre algum erro
            console.error("Erro: " + error);
            alert("Ocorreu um erro ao tentar alterar a empresa");
        })
}