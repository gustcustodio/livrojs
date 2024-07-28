const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inCandidato.value;
  const acertos = Number(frm.inAcertos.value);

  candidatos.push({ nome, acertos }); // adiciona um novo objeto candidato ao array

  frm.reset();
  frm.inCandidato.focus();
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista!");
    return;
  }

  let lista = "";
  for (const candidato of candidatos) {
    const { nome, acertos } = candidato; // desestrutura o objeto candidato
    lista += `${nome} - ${acertos}\n`;
  }
  resp.innerText = lista;
});

frm.btAprovados.addEventListener("click", () => {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista!");
    return;
  }
  const corte = Number(prompt("Número de acertos para aprovação?"));

  const candidatosFilter = candidatos.filter(
    (candidato) => candidato.acertos >= corte
  );

  if (candidatosFilter.length == 0) {
    alert("Nenhum cadidato foi aprovado!");
    return;
  }

  let aprovados = "";

  for (const candidato of candidatosFilter) {
    aprovados += `${candidato.nome} - ${candidato.acertos}\n`;
  }

  resp.innerText = aprovados;
});
