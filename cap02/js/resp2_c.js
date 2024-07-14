// seleciona o elemento <form> na página e armazena na constante frm
const frm = document.querySelector('form')
// seleciona o elemento com o ID 'outResp1' na página e armazena na constante resp2
const resp1 = document.querySelector('#outResp1')
// seleciona o elemento com o ID 'outResp2' na página e armazena na constante resp2
const resp2 = document.querySelector('#outResp2')

// adiciona um ouvinte de evento 'submit' ao formulário
// quando o formulário é submetido, a função de callback é executada
frm.addEventListener('submit', (e) => {
    // obtém o valor do campo de entrada 'inProduto' do formulário
    const produto = frm.inProduto.value

    // obtém o valor do campo de entrada 'inPreco' do formulário e converte para número
    const preco = Number(frm.inPreco.value)

    // calcula o valor do desconto (metade do preço original)
    const desconto = preco / 2
    // calcula o preço final dos 3 produtos (preço original vezes 2 mais o desconto)
    const precoFinal = (preco * 2) + desconto

    // atualiza o texto do elemento resp1 com a promoção dos produtos
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$${precoFinal}`

    // atualiza o texto do elemento resp2 com o valor do desconto no terceiro produto
    resp2.innerText = `O terceiro produto custa apenas R$${desconto}`
    
    // previne o comportamento padrão do formulário de recarregar a página
    e.preventDefault()
})