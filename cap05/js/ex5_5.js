const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let numContas = 0;
let valorTotal = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // se colocado no final da bug
  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inValor.value);

  numContas++;

  valorTotal += valor;
  resposta += descricao + " - R$ " + valor.toFixed(2) + "\n";

  resp1.innerText = `${resposta} --------------------------`;
  resp2.innerText = `${numContas} Conta(s) = Total R${valorTotal.toFixed(2)}`;

  frm.inDescricao.value = "";
  frm.inValor.value = "";
  frm.inDescricao.focus();
});

frm.addEventListener("reset", () => {
  resp1.innerText = "";
  resp2.innerText = "";
});
