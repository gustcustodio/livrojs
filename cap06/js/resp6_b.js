const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const numeros = [];
let lista = "Números: ";

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = frm.inNumero.value;

  if (num === "") {
    alert("Por favor, informe um número.");
    return;
  }

  numeros.push(num);
  resp1.innerText = lista + numeros.join(", ");

  frm.reset();
  frm.inNumero.focus();
});
