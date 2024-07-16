const prompt = require('prompt-sync')() // adiciona pacote prompt-sync

// Entrada

const pessoas = Number(prompt('Número de pessoas: '))
const peixes = Number(prompt('Número de peixeis: '))

// Processamento

let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

// Saída

console.log(`Pagar R$${pagar.toFixed(2)}`)