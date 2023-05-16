const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    },
}

controle.forEach((e) => {
    e.addEventListener("click", (e) => {
        manipulaAtributos(e.target.dataset.controle, e.target.parentNode, e.target.dataset.peca)
    })
})

function manipulaAtributos(operacao, controle, peca) {
    const parte = controle.querySelector('[data-contador]')
    const qntParte = parseInt(parte.value)
    
    if(operacao === "-" && qntParte <= 0) {
        return
    }

    if (operacao === "-") {
        parte.value = qntParte - 1
    }
    else {
        parte.value = qntParte + 1
    }

    atualizaEstatisticas(peca, controle, operacao)
}

function atualizaEstatisticas(peca, controle, operacao) {
    const qntParte = controle.querySelector('[data-contador]')
    
    if(parseInt(qntParte.value) < 0) {
        return
    }

    estatisticas.forEach((e) => {
        if(operacao === "+") {
            e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
        }
        else {
            e.textContent = parseInt(e.textContent) - pecas[peca][e.dataset.estatistica]
        }
    })
}