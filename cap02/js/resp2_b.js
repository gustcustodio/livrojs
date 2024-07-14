// seleciona o elemento <form> na página e armazena na constante frm
const frm = document.querySelector('form')
// seleciona o elemento <h3> na página e armazena na constante resp
const resp = document.querySelector('h3')

// adiciona um ouvinte de evento 'submit' ao formulário
// quando o formulário é submetido, a função de callback é executada
frm.addEventListener('submit', (e) => {
    // obtém o valor do campo de entrada 'inValor' do formulário e converte para número
    const valor = Number(frm.inValor.value)

    // obtém o valor do campo de entrada 'inTempo' do formulário e converte para número
    const tempo = Number(frm.inTempo.value)

    // calcula o número de blocos de 15 minutos necessários, arredondando para cima
    const blocos = Math.ceil(tempo / 15)

    // calcula o valor total a ser pago multiplicando o número de blocos pelo valor por bloco
    const valorTotal = blocos * valor

    // atualiza o texto do elemento <h3> para exibir o valor total a ser pago
    resp.innerText = `Valor a pagar R$${valorTotal}`

    // previne o comportamento padrão do formulário de recarregar a página
    e.preventDefault()   
})