function selecionarPrato(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-prato .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-prato .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');

    const check = document.querySelector('.cards-prato .selecionado ion-icon');
    console.log(check);
    check.classList.remove('escondido');
}

function selecionarBebida(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-bebida .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-bebida .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');

    const check = document.querySelector('.cards-bebida .selecionado ion-icon');
    console.log(check);
    check.classList.remove('escondido');
}

function selecionarSobremesa(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-sobremesa .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        document.querySelector('.cards-sobremesa .selecionado ion-icon').classList.add('escondido');
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');

    const check = document.querySelector('.cards-sobremesa .selecionado ion-icon');
    console.log(check);
    check.classList.remove('escondido');
}