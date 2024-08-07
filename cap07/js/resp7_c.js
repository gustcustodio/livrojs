const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataInfracao = frm.inData.value;
  const valor = Number(frm.inValor.value);
  const valorComDesconto = valor * 0.8;
  const dataLimite = new Date();

  resp2.innerText = `Valor com desconto R$${valorComDesconto.toFixed(2)}`;

  console.log(dataInfracao);
});

/* Suponha que o prazo para o pagamento de uma infração de trânsito com desconto
seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor
da multa. Informe qual a data limite do pagamento, com desconto (até 90 dias) e o
valor a ser pago até essa data (com 20% de desconto) */
