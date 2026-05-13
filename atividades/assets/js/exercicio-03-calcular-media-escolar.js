function exercicio03CalcularMediaEscolar() {
    const campoNota1 = document.getElementById("nota1");
    const nota1 = parseFloat(campoNota1.value);
    if ((nota1 < 0) || (nota1 > 10)) {
        alert("Digite no campo primeira nota uma nota valida, entre 0 e 10");
        campoNota1.value = "";
        return;
    }

    const campoNota2 = document.getElementById("nota2");
    const nota2 = parseFloat(campoNota2.value);
    if ((nota2 < 0) || (nota2 > 10)) {
        alert("Digite no campo de segunda nota uma nota valida, entre 0 e 10");
        campoNota2.value = "";
        return;
    }

    const campoNota3 = document.getElementById("nota3");
    const nota3 = parseFloat(campoNota3.value);
    if ((nota3 < 0) || (nota3 > 10)) {
        alert("Digite no campo terceira nota uma nota valida, entre 0 e 10");
        campoNota3.value = "";
        return;
    }

    let media = calcularMedia(nota1, nota2, nota3);

    let status = "aprovado";
    if ((media >= 4) && (media < 6)) {
        status = "recuperação";
    } else if (media < 4) {
        status = "reprovado";
    }

    const campoResultado = document.getElementById("resultado");
    campoResultado.value = `
    Media: ${media.toFixed(2)}
    Status: ${status}`

}

function calcularMedia(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3;
    let media = soma / 3;
    return media;
}