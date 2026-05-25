
function validarCadastro() {
    debugger
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value;
    if ((nome.length < 3) || (nome.length > 50)) {
        alert("Digite um nome valido!");
        campoNome = "";
        return;
    }

    const tipoContato = document.querySelector("[name='tipo-contato']:checked");
    if (tipoContato === null) {
        alert("Selecione um tipo");
        return;
    }
    const contatoTipo = tipoContato.value;

    const campoCpf = document.getElementById("campo-cpf");
    const cpf = campoCpf.value;
    const campoCelular = document.getElementById("campo-celular");
    const celular = campoCelular.value;
    const campoCnpj = document.getElementById("campo-cnpj");
    const cnpj = campoCnpj.value;
    const campoLinkedin = document.getElementById("campo-linkedin");
    const linkedin = campoLinkedin.value;

    const campoResultado = document.getElementById("resultado");
    if (contatoTipo === "pessoal") {
        campoResultado.value = `
        Contato Salvo:
        
        Nome: ${nome}
        CPF: ${cpf}
        Celular: ${celular}`
    } else if (contatoTipo === "comercial") {
        campoResultado.value = `
        Contato salvo:

        Nome: ${nome}
        CNPJ: ${cnpj}
        Linkedin: ${linkedin}`
    }


}

function visibilidadeCamposComerciais() {
    const escolherTipo = document.getElementById("escolher-tipo");
    escolherTipo.classList.remove("destacar-visivel");
    escolherTipo.classList.add("esconder");

    const camposComerciais = document.getElementById("campos-comerciais");
    camposComerciais.classList.remove("esconder");
    camposComerciais.classList.add("destacar-visivel");
}

function visibilidadeCamposPessoais() {
    const escolherTipo = document.getElementById("escolher-tipo");
    escolherTipo.classList.remove("destacar-visivel");
    escolherTipo.classList.add("esconder");

    const camposPessoais = document.getElementById("campos-pessoais");
    camposPessoais.classList.remove("esconder");
    camposPessoais.classList.add("destacar-visivel");
}