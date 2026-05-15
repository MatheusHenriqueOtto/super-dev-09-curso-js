function calcularDesconto() {
    debugger
    const campoNomeProduto = document.getElementById("campoNomeProduto");
    const nomeProduto = campoNomeProduto.value;

    const campoPreco = document.getElementById("campoPreco");
    const preco = parseFloat(campoPreco.value);
    if ((isNaN(preco)) || (preco < 0)) {
        alert("Digite um preço valido");
        campoPreco.value = "";
        return;
    }

    const campoDesconto = document.getElementById("campoDesconto");
    const desconto = parseFloat(campoDesconto.value);
    if (isNaN(desconto)) {
        alert("Escolha um desconto");
        return;
    }

    const descontoProduto = preco * desconto;
    const precoFinal = preco - descontoProduto;


    const campoResultado = document.getElementById("campoResposta");
    campoResultado.value = (`
        Nome: ${nomeProduto}
        Preço original: R$${preco.toFixed(2)}
        Valor do desconto: R$${descontoProduto.toFixed(2)}
        Preço final: R$${precoFinal.toFixed(2)}`);
}