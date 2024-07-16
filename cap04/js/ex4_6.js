const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) { // verifica se o valor do saque é múltiplo de 10
        alert('Valor inválido para notas disponíveis (R$10, R$50, R$100)') // alerta o usuário se o valor não for múltiplo de 10
        frm.inSaque.focus() // foca no campo de entrada
        return // sai da função
    }

    const notasCem = Math.floor(saque / 100) // calcula a quantidade de notas de R$100
    let resto = saque % 100 // calcula o resto da divisão por 100
    const notasCinquenta = Math.floor(resto / 50) // calcula a quantidade de notas de R$50
    resto = resto % 50 // calcula o resto da divisão por 50
    const notasDez = Math.floor(resto / 10) // calcula a quantidade de notas de R$10

    if (notasCem > 0) { // verifica se há notas de R$100
        resp1.innerText = `Notas de R$100: ${notasCem}` // exibe a quantidade de notas de R$100
    }
    if (notasCinquenta > 0) { // verifica se há notas de R$50
        resp2.innerText = `Notas de R$50: ${notasCinquenta}` // exibe a quantidade de notas de R$50
    }
    if (notasDez > 0) { // verifica se há notas de R$10
        resp3.innerText = `Notas de R$10: ${notasDez}` // exibe a quantidade de notas de R$10
    }

    e.preventDefault()
})

frm.addEventListener('reset', () => { // adiciona um evento ao formulário para quando for resetado
    resp1.innerText = `` // limpa o conteúdo de saída das notas de R$100
    resp2.innerText = `` // limpa o conteúdo de saída das notas de R$50
    resp3.innerText = `` // limpa o conteúdo de saída das notas de R$10
})