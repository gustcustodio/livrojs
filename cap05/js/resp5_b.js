const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const quantidade = Number(frm.inQuantidade.value);
  const anos = Number(frm.inAnos.value);

  let resposta = `1º ano: ${quantidade} Chinchilas \n`;

  let total = quantidade;

  for (let i = 2; i <= anos; i++) {
    total *= 3;

    resposta += `${i}º ano: ${total} Chinchilas \n`;
  }
  resp.innerText = resposta;
});

frm.addEventListener("reset", () => {
  resp.innerText = "";
});
