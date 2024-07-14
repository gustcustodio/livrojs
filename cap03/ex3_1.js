const prompt = require("prompt-sync")() // adiciona pacote para entrada de dados
const num1 = Number(prompt("Primeiro número: ")) // lê o núm. 1
const num2 = Number(prompt("Segundo número: ")) //lê o núm. 2
const soma = num1 + num2 // calcula a soma
console.log(`Soma é ${soma}`) // exibe o resultado