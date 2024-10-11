const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const peso = Number(frm.inPeso.value);

  // * verifica se peso já foi apostaso * //
  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    frm.inPeso.focus();
    return;
  }

  // * se houver dados em localStorage * //
  if (localStorage.getItem("melanciaNome")) {
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    // * salva os dados * //
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    // * senão, é a primeira aposta * //
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarApostas(); // mostra as apostas salvas
  frm.reset(); // limpa o form
  frm.inNome.focus(); // jogo o foco no campo inNome
});
