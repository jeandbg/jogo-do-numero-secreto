let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//----------------------------------------------------------
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';
//
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//
// O código acima, que foi como o curso começou, tem um comportamento muito semelhante entre si;
// Por isso, é interessante declarar uma função com esse comportamento e utilizá-la para 'h1' e 'p' (e qualquer outra tag futura).
// É o que vou fazer abaixo:
//
// exibirTextoNaTela('h1', 'Jogo do Número Secreto');
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//
// só por uma questão de 'caderno de estudos' que estou mantendo esses códigos 'parciais' em vez de excluí-los.
// por fim, a função 'exibirMensagemInicial() englobou as duas alternativas acima.

exibirMensagemInicial();

//----------------------------------------------------------



//----------------------------------------------------------
// Declaração de funções abaixo:

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // API chamada 'responsiveVoice', que fala o texto.
}                                                                            // não funcionou perfeitamente (ou teria que verificar melhor).


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto);
    //console.log(numeroSecreto == chute);    //essa parte ele usou pra demonstrar como aparecem no console 'true' e 'false'


    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {     //includes é um método que verifica se um valor dado já está na lista.
        return gerarNumeroAleatorio();      //recursão aqui: a função chama ela de volta.
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);  //método .push() adiciona um elemento no fim lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;             // me intriga que essa variável tentativas seja alterada fora do escopo da função (wonder).
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}