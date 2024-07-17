const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    resp1.innerText = ``
    resp2.innerText = ``

    const valor = Number(frm.inValor.value)

    if (valor < 1.00) {
        resp1.innerText = `Valor insuficiente`
        frm.inValor.focus()
        return
    }

    let troco
    if (valor >= 1.00 && valor < 1.75) {
        resp1.innerText = `Tempo: 30min`
        troco = valor - 1.00
    } else if (valor >= 1.75 && valor < 3.00) {
        resp1.innerText = `Tempo: 60min`
        troco = valor - 1.75
    } else {
        resp1.innerText = `Tempo: 120min`
        troco = valor - 3.00
    }

    if (troco > 0) {
        resp2.innerText = `Troco R${troco.toFixed(2)}`
    }
})

frm.addEventListener('reset', () => {
    resp1.innerText = ``
    resp2.innerText = ``
})

/* 
    também poderia ter criado uma variável para guardar o tempo. Ex: 
    let tempo
    tempo = 30
    tempo = 60
    tempo = 120
*/
