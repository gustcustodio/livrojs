// cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const veiculo = frm.inVeiculo.value // obtém o nome do veículo
    const preco =  Number(frm.inPreco.value) // obtém o valor do veículo

    const entrada = preco * 0.50 // calcula o valor da entrada
    const parcela = (preco * 0.50) / 12 // calcula o valor das parcelas

    resp1.innerText = `Promoção ${veiculo}` // exibe a outResp1
    resp2.innerText = `Entrada de R$${entrada.toFixed(2)}` // exibe a outResp2
    resp3.innerText = `+12x de R${parcela.toFixed(2)}` // exibe a outResp3

    e.preventDefault() // evita o envio do form
})
