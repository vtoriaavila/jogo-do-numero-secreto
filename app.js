/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

function verificarChute(){
 let chute = document.querySelector('input').value;
 if(chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativa = tentativas>1? 'tentativas':'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
 }else{
    if(chute<numeroSecreto){
    exibirTextoNaTela('p','O número secreto é maior');
    }else{
    exibirTextoNaTela('p','O número secreto é menor');
    }
 tentativas++;
 limparCampo();
}
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*3 + 1);
    let qtdElementosNaLista = listaDeNumerosSorteados.length;
    if(qtdElementosNaLista==3){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ('');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}