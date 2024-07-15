// importa o módulo prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')()

// solicita ao usuário o peso da ração em quilogramas e converte para número, armazenando na constante pesoKg
const pesoKg = Number(prompt('Peso da ração (kg): '))

// solicita ao usuário o consumo diário de ração em gramas e converte para número, armazenando na constante consumo
const consumo = Number(prompt('Consumo diário (gr): '))

// converte o peso da ração de quilogramas para gramas
const pesoGr = pesoKg * 1000

// calcula a duração da ração em dias, dividindo o peso total em gramas pelo consumo diário e arredondando para baixo
const duracao = Math.floor(pesoGr / consumo)

// calcula a sobra de ração em gramas, encontrando o resto da divisão do peso total pelo consumo diário
const sobra =  pesoGr % consumo

// exibe a duração da ração em dias
console.log(`Duração: ${duracao} dias`)

// exibe a sobra de ração em gramas
console.log(`Sobra: ${sobra}gr`)