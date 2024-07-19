const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruta = frm.inFruta.value;
  const quantidade = Number(frm.inQuantidade.value);

  let resposta = fruta;

  for (let i = 1; i < quantidade; i++) {
    resposta += ` * ${fruta}`
  }

  resp.innerText = resposta;
});

frm.addEventListener("reset", () => {
    resp.innerText = ''
})

