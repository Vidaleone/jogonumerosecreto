// O modo abaixo é um modo concatenado que funciona de maneira mais
//detalhada. Teria que faze-lo toda vez que quisesse chamar uma function

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// já o modo de tag, ele diminui o código, especificando a área que você quer


let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){  
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
 }
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (chute < numeroSecreto) {
    exibirTextoNaTela('p','o número secreto é maior...');
    } else {
    exibirTextoNaTela('p','o número secreto é menor...');
      }

    //   tentativas = tentativas +1;
    //   ou 
      tentativas++
      limparCampo();
   }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
    }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){

     } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
     }
  }

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = ''
}

function reiniciarJogo(){
 numeroSecreto = gerarNumeroAleatorio();
 limparCampo();
 tentativas = 1; 
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);

} 