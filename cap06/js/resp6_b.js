const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const numeros = [];
let lista = "Números: ";

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);

  if (isNaN(num)) {
    alert("Por favor, informe um número.");
    return;
  }

  if (numeros.includes(num)) {
    alert(`O número ${num} já está na lista!`);
  } else {
    numeros.push(num);
    resp1.innerText = lista + numeros.join(", ");
  }

  frm.reset();
  frm.inNumero.focus();
});

frm.btVerificar.addEventListener("click", () => {
  let ordenado = true;
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordenado = false;
      break;
    }
  }

  if (ordenado) {
    resp2.innerText = "Os números digitados estão em ordem crescente!";
  } else {
    resp2.innerText =
      "Atenção! Os números digitados não estão em ordem crescente.";
  }
});
