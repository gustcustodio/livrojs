const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    const numero = Number(frm.inNumero.value)

    let resposta = ''

    for (let i = 1; i <= 10; i++) { // loop de 1 a 10 para calcular a tabuada
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }

    resp.innerText = resposta

    e.preventDefault()
})