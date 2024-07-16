const frm = document.querySelector('form')
const resp = document.querySelector('h3')

    frm.addEventListener('submit', (e) => {
        const numero = Number(frm.inNumero.value)

        let resultado
        if (numero % 2 == 0) {
            resultado = 'par'
            resp.innerText = `${numero} é ${resultado}`
        } else {
            resultado = 'ímpar'
            resp.innerText = `${numero} é ${resultado}`
        }

        /* 
        const resultado = numero % 2 == 0 ? 'par' : 'ímpar'
        resp.innerText = `${numero} é ${resultado}`
        */

        e.preventDefault()
    })

