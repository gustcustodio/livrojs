// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector('form') // seleciona o elemento form
const resp = document.querySelector('h3') // seleciona o elemento h3

/* cria um "ouvinte" de evento, acionado quando o botão submit for clicado quando o formulário é submetido, a função de callback com arrow functions(=>) é executada para lidar com o evento submit do formulário. */
frm.addEventListener('submit', (e) => {
    const quilo = Number(frm.inQuilo.value) // obtém o preço do quilo
    const consumo = Number(frm.inConsumo.value) // obtém o valor consumido

    const valor = (quilo / 1000) * consumo // calcula o valor a ser pago
    resp.innerText = `Valor a pagar R$${valor.toFixed(2)}` // exibe a resposta

    e.preventDefault() // evita o envio do form
})
