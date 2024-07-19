const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$"));
const num = Number(prompt("Número de parcelas: "));
const valorParcelas = Math.floor(valor / num);
const valorFinal = valorParcelas + (valor % num);

for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$${valorParcelas.toFixed(2)}`)
}

console.log(`${num}ª parcela: R$${valorFinal.toFixed(2)}`)
