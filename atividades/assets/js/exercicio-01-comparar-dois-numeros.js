
function exercicio01CompararDoisNumeros() {
    const campoNumero1 = document.getElementById("numero1");
    const numero1 = parseInt(campoNumero1.value);

    const campoNumero2 = document.getElementById("numero2");
    const numero2 = parseInt(campoNumero2.value);

    //se os campos estiverem errado o if executa um retorno;
    if (verificarCampos(numero1, numero2, campoNumero1, campoNumero2)) return;
    const numeroMaior = verificarNumeroMaior(numero1, numero2);
    const numerosIguais = verificarNumerosIguais(numero1, numero2);
    apresentarVerificacao(numeroMaior, numerosIguais);
}

function verificarCampos(numero1, numero2, campoNumero1, campoNumero2) {
    if (isNaN(numero1)) {
        alert("Preencha o campo do primeiro número corretamente");
        campoNumero1.value = "";
    }
    if (isNaN(numero2)) {
        alert("Preencha o campo do segundo número corretamente");
        campoNumero2.value = "";
    }
    return false;
}

function verificarNumeroMaior(numero1, numero2) {
    if (numero1 > numero2) return numero1;
    if (numero1 < numero2) return numero2;
    return null;
}

function verificarNumerosIguais(numero1, numero2) {
    return numero1 === numero2;
}

function apresentarVerificacao(numeroMaior, numerosIguais) {
    alert(`O número maior é: ${numeroMaior ?? "nenhum (são iguais)"}
Os números são iguais: ${numerosIguais}`);
}


