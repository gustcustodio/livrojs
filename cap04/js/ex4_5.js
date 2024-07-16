const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const num = Number(frm.inNumero.value)
    const raizQuadrada = Math.sqrt(num)

    if (Number.isInteger(raizQuadrada)) {
        resp.innerText = `Raiz: ${raizQuadrada}`        
    } else {
        resp.innerText = `Não há raiz exata para ${num}`
    }

    e.preventDefault()
})