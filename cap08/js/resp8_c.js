const frm = document.querySelector("form");
const tipoConvenio = document.querySelector("#selectConvenio");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// função que calcula o desconto com base no valor e percentual fornecido:
function calcularDesconto(valor, desc) {
  let desconto = valor * desc;
  return desconto;
}

// evento ao clicar na opção "Sim" para convênio:
frm.rbSim.addEventListener("click", () => {
  selectConvenio.className = "exibe"; // exibe o campo de seleção de convênios
});

// evento ao clicar na opção "Não" para convênio:
frm.rbNao.addEventListener("click", () => {
  selectConvenio.className = "oculta"; // oculta o campo de seleção de convênios
});

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);

  let desconto;
  // verifica se o convênio foi selecionado:
  if (frm.rbSim.checked) {
    // verifica se o convênio é "saúde animal":
    if (frm.selConvenio.value == "saudeAnimal") {
      desconto = calcularDesconto(valor, 0.5); // aplica um desconto de 50%
    } else { // se o convênio for outro
      desconto = calcularDesconto(valor, 0.2); // aplica um desconto de 20%
    }
  } else { // se o convênio não foi selecionado
    desconto = calcularDesconto(valor, 0.1); // aplica um desconto padrão de 10%
  }

  resp1.innerText = `Desconto R$${desconto.toFixed(2)}`;
  resp2.innerText = `A pagar R$${(valor - desconto).toFixed(2)}`;
});
