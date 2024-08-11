const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

// evento ao clicar ("click") no botão de rádio "Pizza":
frm.rbPizza.addEventListener("click", () => {
  frm.inBebida.className = "oculta"; // esconde o campo de seleção de bebidas
  frm.inPizza.className = "exibe"; // esconde o campo de seleção de pizzas
});

// evento ao clicar ("click") no botão de rádio "Bebida":
frm.rbBebida.addEventListener("click", () => {
  frm.inPizza.className = "oculta"; // esconde o campo de seleção de pizzas
  frm.inBebida.className = "exibe"; // exibe o campo de seleção de bebidas
});

// evento quando o campo de detalhes ganha o foco:
frm.inDetalhes.addEventListener("focus", () => {
  // verifica se o botão de rádio "pizza" está selecionado:
  if (frm.rbPizza.checked) {
    const pizza = frm.inPizza.value; // obtém o valor selecionado no campo pizza
    // define o número de sabores com base no tamanho da pizza:
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    // define o placeholder com a quantidade de sabores:
    frm.inDetalhes.placeholder = `Até ${num} sabores`;
  }
});

// evento quando o campo detalhes perde o foco:
frm.inDetalhes.addEventListener("blur", () => {
  frm.inDetalhes.placeholder = ""; // limpa o placeholder do campo de detalhes
});

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let produto;
  // verifica se o botão de rádio "Pizza" está selecionado:
  if (frm.rbPizza.checked) {
    // obtém o índice do item selecionado na lista de pizzas:
    const num = frm.inPizza.selectedIndex;
    produto = frm.inPizza.options[num].text; // obtém o texto do item selecionado
  } else {
    // obtém o índice do item selecionado na lista de bebidas:
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text; // obtém o texto do item selecionado
  }

  // obtém o valor do campo detalhes:
  const detalhes = frm.inDetalhes.value;
  // adiciona o produto e os detalhes ao array de itens:
  itens.push(produto + " (" + detalhes + ") ");
  resp.innerText = itens.join("\n");

  frm.reset(); // reseta o formulário para o estado inicial
  // dispara o evento de clique no botão de rádio "Pizza" para reexibir as opções de pizza:
  frm.rbPizza.dispatchEvent(new Event("click"));
});
