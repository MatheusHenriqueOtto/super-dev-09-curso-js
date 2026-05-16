function aumentarTamanhoCaixa(){
    //debugger
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.add("caixa-maior");
}

function redefinirCaixa(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList = [];
    caixaProduto.classList.add("caixa-preta" , "caixa-padrao");
}

function caixaCorAzul(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.remove("caixa-preta", "caixa-vermelho", "caixa-verde");
    caixaProduto.classList.add("caixa-azul");
}

function caixaCorPreta(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.remove("caixa-azul", "caixa-vermelho", "caixa-verde");
    caixaProduto.classList.add("caixa-preta");
}

function caixaCorVermelho(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.remove("caixa-preta", "caixa-azul", "caixa-verde");
    caixaProduto.classList.add("caixa-vermelho");
}

function caixaCorVerde(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.remove("caixa-preta", "caixa-vermelho", "caixa-azul");
    caixaProduto.classList.add("caixa-verde");
}

function adicionarBorda(){
    const caixaProduto = document.getElementById("caixa-produto");
    caixaProduto.classList.add("destacar-borda")
}
