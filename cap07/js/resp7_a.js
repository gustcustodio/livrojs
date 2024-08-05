const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = frm.inMensagem.value;
  const tamanho = mensagem.length;
  let resposta = "";

  for (let i = 1; i <= tamanho; i += 2) {
    resposta += mensagem.charAt(i);
  }

  for (let i = 0; i <= tamanho; i += 2) {
    resposta += mensagem.charAt(i);
  }

  resp.innerText = resposta;
});

frm.btDescripto.addEventListener("click", () => {
  if (!frm.checkValidity()) {
    alert("Informe a mensagem!");
    frm.inMensagem.focus();
    return;
  }

  const mensagem = frm.inMensagem.value;
  resp.innerText = mensagem;
});
