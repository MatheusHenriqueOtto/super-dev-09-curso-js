function exercicio02ClassificarIdade() {
    const campoNome = document.getElementById("nome");
    const nome = campoNome.value;
    if (nome === null) {
        alert("Campo nome está incorreto");
        campoIdade.value = "";
        return;
    }

    const campoIdade = document.getElementById("idade");
    const idade = parseInt(campoIdade.value);
    if ((idade > 0) && (idade > 120)) {
        alert("Voce digitou uma idade invalida");
        campoIdade.value = "";
        return;
    }

    let faixaEtaria = "Criança";
    if ((idade > 12) && (idade < 18)) {
        faixaEtaria = "Adolescente";
    } else if ((idade >= 18) && (idade < 65)) {
        faixaEtaria = "Adulto";
    } else if (idade >= 65) {
        faixaEtaria = "Idoso"
    }

    alert(`A sua faixa etária é: ${faixaEtaria}`);
}