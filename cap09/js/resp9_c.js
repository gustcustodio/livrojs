// todo Elaborar um programa para cadastrar os serviços a serem realizados por um auto center, que organize a ordem de execução dos serviços. Armazenar os serviços no navegador do usuário e a cada clique no botão Executar Serviço remover o primeiro serviço e exibi-lo na página. O programa deve atualizar o número de serviços pendentes quando: a) a página for aberta; b) um serviço for incluído; c) um serviço for removido. //

const frm = document.querySelector("form");
const servicoEmExecucao = document.querySelector("h4");
const contadorDeServicos = document.querySelector("span");

const mostrarPendentes = () => {
  let contador;

  if (localStorage.getItem("servicos")) {
    contador = localStorage.getItem("servicos").split(";").length;
  } else {
    contador = 0;
  }
  contadorDeServicos.innerText = contador;
};

window.addEventListener("load", mostrarPendentes);

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const servicoVeiculoInput = frm.inServico.value;

  if (localStorage.getItem("servicos")) {
    const servicosLocalStorage =
      localStorage.getItem("servicos") + ";" + servicoVeiculoInput;
    localStorage.setItem("servicos", servicosLocalStorage);
  } else {
    localStorage.setItem("servicos", servicoVeiculoInput);
  }

  mostrarPendentes();

  frm.reset();
  frm.inServico.focus();
});

frm.btExecutar.addEventListener("click", () => {
  if (localStorage.getItem("servicos")) {
    const servicos = localStorage.getItem("servicos").split(";");
    servicoEmExecucao.innerText = servicos.shift();
    localStorage.setItem("servicos", servicos.join(";"));
  } else {
    alert("Não há serviços pendentes para executar!");
  }

  mostrarPendentes();
});
