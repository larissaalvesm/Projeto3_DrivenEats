function selecionarPrato(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-prato .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');
}

function selecionarBebida(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-bebida .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');
}

function selecionarSobremesa(cardClicado) {

    const cardSelecionadoAnteriormente = document.querySelector('.cards-sobremesa .selecionado');
    console.log(cardSelecionadoAnteriormente);

    if (cardSelecionadoAnteriormente !== null) {
        cardSelecionadoAnteriormente.classList.remove('selecionado');
    }

    const card = document.querySelector(cardClicado);
    console.log(cardClicado);
    card.classList.add('selecionado');
}