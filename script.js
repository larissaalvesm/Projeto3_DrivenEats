let prato;
let valorPrato;

function selecionarPrato(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-prato .selecionado');

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-prato .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    card.classList.add('selecionado');

    prato = document.querySelector('.cards-prato .selecionado h2').innerHTML;
    valorPrato = document.querySelector('.cards-prato .selecionado h3').innerHTML;
    valorPrato = Number(valorPrato.substring(3));

    const check = document.querySelector('.cards-prato .selecionado ion-icon');
    check.classList.remove('escondido');

    fecharPedido();
}

let bebida;
let valorBebida;

function selecionarBebida(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-bebida .selecionado');

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-bebida .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    card.classList.add('selecionado');

    bebida = document.querySelector('.cards-bebida .selecionado h2').innerHTML;
    valorBebida = document.querySelector('.cards-bebida .selecionado h3').innerHTML;
    valorBebida = Number(valorBebida.substring(3));

    const check = document.querySelector('.cards-bebida .selecionado ion-icon');
    check.classList.remove('escondido');

    fecharPedido();
}

let sobremesa;
let valorSobremesa;

function selecionarSobremesa(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-sobremesa .selecionado');

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-sobremesa .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    card.classList.add('selecionado');

    sobremesa = document.querySelector('.cards-sobremesa .selecionado h2').innerHTML;
    valorSobremesa = document.querySelector('.cards-sobremesa .selecionado h3').innerHTML;
    valorSobremesa = Number(valorSobremesa.substring(3));

    const check = document.querySelector('.cards-sobremesa .selecionado ion-icon');
    check.classList.remove('escondido');

    fecharPedido();
}

function fecharPedido(cardClicado) {

    const pratoSelecionado = document.querySelector('.cards-prato .selecionado');
    const bebidaSelecionada = document.querySelector('.cards-bebida .selecionado');
    const sobremesaSelecionada = document.querySelector('.cards-sobremesa .selecionado');
    const botaoSelecionarItens = document.querySelector('.selecionar-itens');

    if (pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        botaoSelecionarItens.classList.add('verde');
        botaoSelecionarItens.innerHTML = "Fechar pedido";
        botaoSelecionarItens.disabled = false;
    }

}

let mensagem;


function enviarPedido() {
    mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${prato} \n - Bebida: ${bebida} \n - Sobremesa: ${sobremesa} \n Total: R$ ${(valorPrato + valorBebida + valorSobremesa).toFixed(2)}`;

    mensagem = encodeURI(mensagem);
}
