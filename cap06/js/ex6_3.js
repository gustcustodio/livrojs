const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);
  carros.push({ modelo, preco }); // adiciona dados ao vetor de objetos

  frm.inModelo.value = "";
  frm.inPreco.value = "";
  frm.inModelo.focus();
  // dispara um evento de click em btListar(equivale a um clique no botão na página):
  frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
  // verifica se há carros na lista:
  if (carros.length == 0) {
    alert("Não há carros na lista!");
    return;
  }
  // método reduce() concatena uma string, obtendo modelo e preço de cada veículo;
  // usa reduce para criar uma string com a lista de carros:
  const lista = carros.reduce(
    (acumulador, carro) => acumulador + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n",
    ""
  );
  resp.innerText = `Lista do carros cadastrados \n${"-".repeat(40)}\n${lista}`;
});
// evento de clique no botão Filtrar:
frm.btFiltrar.addEventListener("click", () => {
  const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
  if (maximo == 0 || isNaN(maximo)) {
    return;
  }
  // cria um novo vetor com os objetos que atendem a condição de filtro(filter()):
  const carrosFilter = carros.filter((carro) => carro.preco <= maximo);
  if (carrosFilter.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado");
    return;
  }
  // cria uma string com a lista de carros filtrados:
  let lista = "";
  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros até R$${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto: "));
  if (desconto == 0 || isNaN(desconto)) {
    return;
  }

  const carrosDesc = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto) / 100,
  }));

  let lista = "";
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`;
  }

  resp.innerText = `Carros com desconto ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
