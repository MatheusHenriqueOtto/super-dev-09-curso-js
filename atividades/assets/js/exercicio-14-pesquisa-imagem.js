function pesquisarImagem(){
    debugger
    const imagem = document.getElementsByClassName("imagem")[0];
    const campoPesquisa = document.getElementById("campo-pesquisa");
    const pesquisa = campoPesquisa.value;
    const campoDescricao = document.getElementById("descricao");
    const caixaDescricao = document.getElementById("caixa-descricao");

    const calo = "https://i1-e.pinimg.com/webp/1200x/4d/5c/34/4d5c345462e46789b9d170487d85ccca.webp";
    const sapo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gYdN_rFNfsbaJ7URdtphbZP8AgX-EgxtfA&s";
    const rato = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZld-RUyW1zJN44SigO3TKi2ZYESz1WmiLQ&s";
    
    if(pesquisa === "calo"){
        imagem.style.background = `url('${calo}')`;
        campoDescricao.value = `
        A imagem mostra um cavalo marrom correndo em um terreno arenoso sob luz forte. A foto está em baixa resolução e apresenta distorção digital, fazendo com que o corpo do animal pareça incomumente encurtado. No canto inferior esquerdo, está escrita a palavra "calo" em letras brancas de fôrma.`;
        caixaDescricao.classList.remove("hidden");
    } else if(pesquisa === "sapo"){
        imagem.style.background = `url ('${sapo}')`;
        campoDescricao.value = `
        A imagem apresenta uma ilustração digital em estilo de desenho animado do rosto do personagem Pepe the Frog, um sapo verde amplamente conhecido como meme na internet. Ele é retratado em close-up com grandes olhos brancos voltados para a direita, pálpebras expressivas e a boca bem aberta em uma expressão alegre, revelando uma língua rosada e lábios grossos em tom de marrom, destacados sobre um fundo branco.`;
        caixaDescricao.classList.remove("hidden");
    } else if(pesquisa === "rato"){
        imagem.style.backround = `url('${rato}')`;
        campoDescricao.value = `
        A imagem é um meme composto pelo texto superior "O rato esperando você ir dormir pra mexer nas panelas", acompanhado de emojis de ratos, e logo abaixo traz a foto em close-up de um rato modificado digitalmente com feições humanas masculinas bem marcadas. O animal exibe uma mandíbula quadrada, sobrancelhas franzidas e uma expressão séria e imponente que remete diretamente à estética do meme "Gigachad".`;
        caixaDescricao.classList.remove("hidden");
    }


}