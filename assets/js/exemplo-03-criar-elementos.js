function adicionarAluno(){
    const campoNome = document.getElementById("campo-nome");
    const nome = campoNome.value.trim();

    if(nome.lengh === 0){
        alert("Digite um nome válido")
        campoNome.focus();
        return;
    }

    const divCardAluno = document.createElement("div");
    divCardAluno.classList.add("card-aluno");

    const h3NomeAluno = document.createElement("h3");
    h3NomeAluno.innerText = nome;

    const pMensagem = document.createElement("p");
    pMensagem.innerText = "Aluno cadastrado com JS";
    debugger
    divCardAluno.appendChild(h3NomeAluno);
    divCardAluno.appendChild(pMensagem);

    //Pegar o elemento (lista-alunos) que eu adicionarei a nova div
    const divListaAlunos = document.getElementsByClassName("lista-alunos")[0];
    divListaAlunos.appendChild(divCardAluno);

    //Limpar Campo
    campoNome = "";
    campoNome.value = "";
    campoNome.focus();
}

function adicionarAlunoNoEnter(event) {
    if (event.key === "Enter") {
        adicionarAluno();
    }
}