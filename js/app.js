let jogosAlugados = 1;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let botaoClicado = document.getElementById('game-' + id);
    let imagem = botaoClicado.querySelector('.dashboard__item__img');
    let botao = botaoClicado.querySelector('.dashboard__item__button');

    if(confirm(`Tem certeza que você quer ${botao.innerHTML} esse jogo?`)){
        if (botao.classList.contains('dashboard__item__button--return')){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            jogosAlugados --;
        } else {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.innerHTML = 'Devolver';
            jogosAlugados ++;
        }
    }
    contarEExibirJogosAlugados();
}