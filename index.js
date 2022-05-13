const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = 0; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }

    return maisBarato;
}

module.exports = menorValor;


function maiorValor() {
    let maisCaro = 0;

    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco > livros[maisCaro].preco) {
            maisCaro = atual
        }
    }

    return maisCaro;
}

module.exports = maiorValor;


