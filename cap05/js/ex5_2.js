const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const numero = Number(frm.inNumero.value);
  let resposta = `Entre ${numero} e 1: `;

  for (let i = numero; i > 1; i--) {
    resposta = resposta + i + ",";
  }

  resp.innerText = resposta + "1.";

  e.preventDefault();
});
