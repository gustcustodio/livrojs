// importa o módulo prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

// solicita ao usuário o salário e armazena na constante salario, convertendo para número
const salario = Number(prompt('Salário: R$'))

// solicita ao usuário o tempo de serviço em anos e armazena na constante tempo, convertendo para número
const tempo = Number(prompt('Tempo (anos): '))

// calcula o número de quadriênios (períodos de 4 anos de serviço) e armazena na constante quadrienios
const quadrienios = Math.floor(tempo / 4)

// calcula o valor do aumento salarial baseado no número de quadriênios, onde cada quadriênio dá um aumento de 1% do salário
const aumento = salario * quadrienios / 100

// exibe o número de quadriênios
console.log(`Quadriênios: ${quadrienios}`)

// calcula e exibe o salário final, somando o salário original e o aumento, formatado com duas casas decimais
console.log(`Salário final R$${(salario + aumento).toFixed(2)}`)