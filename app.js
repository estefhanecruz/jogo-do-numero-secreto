let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

tentativas = 1;

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let = palavraTentativa = tentativas>1 ? 'tentativas': 'tentativa';
        if (chute == numeroSecreto){
            
            exibirTextoNaTela('h1', `Acertou!`);
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
           
        }else{
            if(chute>numeroSecreto){
               // exibirTextoNaTela('h1', `Não foi dessa vez`);
                exibirTextoNaTela('p', `O número secreto é menor que o seu chute`);
            } else{
            //exibirTextoNaTela('h1', `Não foi dessa vez`);
            exibirTextoNaTela('p', `O número secreto é maior que o seu chute`);
        }
        tentativas++;
        limparCampo();
    }
}

// Função que gera um número aleatório 
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        console.log(listaDeNumerosSorteados);
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
        
    }
   
}

// Função que limpa o campo onde se dá o chute
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
//Função que reinicia o jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//função que exibe o texto na tela e fala para o usuário
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
    }

    //Função que exibe o texto da tela inicial
function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
