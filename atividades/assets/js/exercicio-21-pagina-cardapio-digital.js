function adicionarAoCardapio() {
    debugger
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value;
    if ((nome.length < 2) || (nome.length > 100)) {
        alert(`Digite um nome valido,(entre 2 e 100)`);
        campoNome.value = "";
        return;
    }
    const campoPreco = document.getElementById("campo-preco");
    const preco = parseFloat(campoPreco.value);
    if ((preco.isNaN) || (preco < 0)) {
        alert("Digite um numero valido, (maior que 0 )");
        campoPreco.value = "";
        return;
    }
    const campoSelect = document.getElementById("selecao-tipo");
    const selecionado = campoSelect.value;
    if (selecionado.length == 0) {
        alert("Selecione um tipo de produto");
        return;
    }

    /*
    div class="caixa-dos-cards"
        div class="do-tipo-de-refeição  caixa-cards"
            nome
            preco
            categoria=selecionado
        /div

    */
    let tipo = "";

    const pNome = document.createElement("p");
    pNome.innerText = (`Nome: ${nome}`);
    const pPreco = document.createElement("p");
    pPreco.innerText = (`Preço: ${preco}`);
    const pCategoria = document.createElement("p");
    pCategoria.innerText = (`Categoria: ${selecionado}`);
    const divCardPrato = document.createElement("div");
    divCardPrato.classList.add(`caixa-cards`);
    divCardPrato.classList.add(`card-${selecionado}`);
    divCardPrato.appendChild(pNome);
    divCardPrato.appendChild(pPreco);
    divCardPrato.appendChild(pCategoria);

    const divDosCards = document.getElementById("caixa-dos-cards");
    divDosCards.classList.remove("hidden");
    divDosCards.appendChild(divCardPrato);

    campoNome.value = "";
    campoPreco.value = "";
    campoSelect.value = "";
}
