const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataInfracao = frm.inData.value;
  const valor = Number(frm.inValor.value);
  const valorComDesconto = valor * 0.8;
  const dataLimite = new Date();

  const partes = dataInfracao.split("-");
  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMonth(Number(partes[1] - 1));
  dataLimite.setFullYear(Number(partes[0]));

  const dia = dataLimite.getDay();

  dataLimite.setDate(dia + 90);
  const mes = dataLimite.getMonth() + 1;
  const ano = dataLimite.getFullYear();

  resp1.innerText = `Data limite para pagamento com desconto: 
  ${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}`;
  resp2.innerText = `Valor com desconto R$${valorComDesconto.toFixed(2)}`;
});

/* Suponha que o prazo para o pagamento de uma infração de trânsito com desconto
seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor
da multa. Informe qual a data limite do pagamento, com desconto (até 90 dias) e o
valor a ser pago até essa data (com 20% de desconto) */
