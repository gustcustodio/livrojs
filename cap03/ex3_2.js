// importa o módulo prompt-sync para receber entradas do usuário
const prompt = require("prompt-sync")()

// solicita ao usuário o nome do veículo e armazena na constante veiculo
const veiculo = prompt("Veículo:")

// solicita ao usuário o preço do veículo, converte para número e armazena na constante preco
const preco = Number(prompt("Preço R$"))

// calcula o valor da entrada como 50% do preço e armazena na constante entrada
const entrada = preco * 0.50

// calcula o valor de cada parcela (50% do preço dividido por 12) e armazena na constante parcela
const parcela = (preco * 0.50) / 12

// exibe a promoção do veículo com o valor da entrada e o valor das parcelas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$${entrada.toFixed(2)}`)
console.log(`+12x de R$${parcela.toFixed(2)}`)