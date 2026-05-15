function simulaSalario() {
    const campoNome = document.getElementById("campoNome");
    const nome = campoNome.value;
    if ((nome === "") || (nome <= 2)) {
        alert("Digite um nome valido!");
        campoNome.value = "";
        return;
    }

    const campoSalarioAtual = document.getElementById("campoSalarioAtual");
    const salarioAtual = campoSalarioAtual.value;
    if ((salarioAtual <= 0) || (isNaN(salarioAtual))) {
        alert("Digite um valor valido!");
        campoSalarioAtual.value = "";
        return;
    }

}