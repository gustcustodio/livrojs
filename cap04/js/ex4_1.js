const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) =>{
    const nome = frm.inNome.value
    const n1 = Number(frm.inNota1.value)
    const n2 = Number(frm.inNota2.value)

    const media = (n1 + n2) / 2

    resp1.innerText = `Média das notas ${media}`

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = 'green'
    } else {
        resp2.innerText = `Ops ${nome}... Você foi resprovado(a)`
        resp2.style.color = 'red'
    }

    e.preventDefault()
})