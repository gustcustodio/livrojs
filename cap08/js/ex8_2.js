const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modelo = frm.inModelo.value;
  const ano = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);
  // chama a função para classificar o veículo: 
  const classificacao = classificarVeiculo(ano);
  // calcula o valor da entrada com base na classificação do veículo: 
  const entrada = calcularEntrada(preco, classificacao);
  const parcela = (preco - entrada) / 10;

  resp1.innerText = modelo + " - " + classificacao;
  resp2.innerText = `Entrada R$ ${entrada.toFixed(2)}`;
  resp3.innerText = `+10x de R$ ${parcela.toFixed(2)}`;
});

// função para classificar o veículo com base no ano de fabricação: 
const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear(); // obtém o ano atual
  let classif;

  if (ano == anoAtual) {
    classif = "Novo";
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
  return classif;
};

// função para calcular a entrada do veículo com base no preço e na classificação: 
const calcularEntrada = (valor, status) =>
  status == "Novo" ? valor * 0.5 : valor * 0.3;
