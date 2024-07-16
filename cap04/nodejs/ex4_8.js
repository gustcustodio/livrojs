const prompt = require('prompt-sync')() // adiciona pacote prompt-sync

// Entrada

    const valor = Number(prompt('Valor da compra : R$'))

// Processamento

    const aux = Math.floor(valor / 20)
    const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
/* 
Para calcular o número de parcelas, foi utilizado o operador ternário. 
Ele equivale às seguintes linhas de código:
    let parcelas
    if (aux == 0) {
        parcelas = 1                
    } else if (aux > 6) {
        parcelas = 6        
    } else {
        parcelas = aux
    }
*/
    const valorParcela = valor / parcelas
// Saída
    console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`)
