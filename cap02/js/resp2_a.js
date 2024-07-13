// seleciona o elemento <form> na página e armazena na constante frm
const frm = document.querySelector('form')
// seleciona o elemento com id 'outResp1' e armazena na constante resp1
const resp1 = document.querySelector('#outResp1')
// seleciona o elemento com id 'outResp2' e armazena na constante resp2
const resp2 = document.querySelector('#outResp2')

// adiciona um ouvinte de evento 'submit' ao formulário
// quando o formulário é submetido, a função de callback é executada
frm.addEventListener('submit', (e) => {
    // obtém o valor do campo de entrada 'inMedicamento' do formulário
    const medicamento = frm.inMedicamento.value

    // obtém o valor do campo de entrada 'inPreco' do formulário e converte para número
    const preco = Number(frm.inPreco.value) 

    // calcula o preço final da promoção: preço arredondado para baixo multiplicado por 2
    const precoFinal = Math.floor(preco * 2)

    // define o texto do elemento resp1 para mostrar a promoção do medicamento
    resp1.innerText = `Promoção de ${medicamento}`

    // define o texto do elemento resp2 para mostrar o preço final da promoção
    resp2.innerText = `Leve 2 por apenas ${precoFinal}`

    // previne o comportamento padrão do formulário de recarregar a página
    e.preventDefault()
})