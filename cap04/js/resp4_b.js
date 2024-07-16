const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const velocidadePermitida = Number(frm.inVelocidadePermitida.value)
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value)
    const auxiliar = velocidadePermitida + (velocidadePermitida * 0.20)

    if (velocidadeCondutor <= velocidadePermitida) {
        resp.innerText = `Sem multa`
    } else if (velocidadeCondutor <= auxiliar) {
        resp.innerText = `Multa leve`        
    } else {
        resp.innerText = `Multa grave`
    }

    e.preventDefault()
})