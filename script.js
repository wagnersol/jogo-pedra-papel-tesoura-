var jogadorescolha = 0;
var jogadorpontuacao = 0;
var computadorescolha = 0;
var computadorpontuacao = 0;
var ganhador = -1;


function jogar(escolha) {
    jogadorescolha = escolha;
    computadorescolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    // 1 stone
    // 2 paper
    // 3 scrissor

     if ((jogadorescolha == 1) && (computadorescolha == 1)) { 
        ganhador = 0;
    }
    else if ((jogadorescolha == 1) && (computadorescolha == 2)) { 
        ganhador = 2;
    }
    else if ((jogadorescolha == 1) && (computadorescolha == 3)) {
        ganhador = 1;
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 1)) {
        ganhador = 1;
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 2)) { 
        ganhador = 0;
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 3)) {
        ganhador = 2;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 1)) { 
        ganhador = 2;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 2)) { 
        ganhador = 1;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 3)) { 
        ganhador = 0;
    }

    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');




    document.getElementById("jogador-escolha-" + jogadorescolha)
        .classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorescolha)
        .classList.add('selecionado');


    if (ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'empate';
    }
    else if (ganhador == 1) {
        document.getElementById('mensagens').innerHTML = 'jogador ganhou';
        jogadorpontuacao++;
    }

    else if (ganhador == 2) {
        document.getElementById('mensagens').innerHTML = 'computador ganhou';
        computadorpontuacao++;
    }

    document.getElementById('jogador-pontos').innerHTML = jogadorpontuacao;

    document.getElementById('computador-pontos').innerHTML = computadorpontuacao;
}