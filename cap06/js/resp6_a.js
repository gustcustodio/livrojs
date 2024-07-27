const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const clube = frm.inClube.value;
  clubes.push(clube);

  frm.reset();
  frm.inClube.focus();
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {
    alert("Não há clubes na lista!");
    return;
  }
  resp.innerText = clubes.join("\n");
});

/* montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo 
e assim por diante. exibir mensagem e não listar a tabela de jogos, caso o número
de clubes informados seja ímpar. */
frm.btTabela.addEventListener("click", () => {});
