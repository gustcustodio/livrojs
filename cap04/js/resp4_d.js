const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    resp1.innerText = ``
    resp2.innerText = ``

    const a = Number(frm.inLadoA.value)
    const b = Number(frm.inLadoB.value)
    const c = Number(frm.inLadoC.value)


    if (a > b + c || b > a + c || c > a + b) {
        resp1.innerText = `Não é possível formar um triângulo.`
        frm.inLadoA.focus()
        return
    }

    let tipo
    if (a == b && a == c) {
        tipo = 'Equilátero'
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = `Tipo: ${tipo}`
    } else if (a != b && a != c && b != c) {
        tipo = 'Escaleno'
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = `Tipo: ${tipo}`
    } else {
        tipo = 'Isósceles'
        resp1.innerText = `Lados podem formar um triângulo`
        resp2.innerText = `Tipo: ${tipo}`
    }
})

frm.addEventListener('reset', () => {
    resp1.innerText = ``
    resp2.innerText = ``
})