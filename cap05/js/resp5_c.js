const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);
  const ultimo = num / 2;
  let soma = 0;
  let divisores = "";

  for (let i = 1; i < num / 2; i++) {
    if (num % i == 0) {
      soma += i;
      divisores += i + ", ";
    }
  }

  soma += ultimo;

  if (soma === num) {
    resp1.innerText = `Divisores de ${num}: ${divisores}${ultimo} (Soma: ${soma})`;
    resp2.innerText = `${num} é um Número Perfeito`;
  } else {
    resp1.innerText = `Divisores de ${num}: ${divisores}${ultimo} (Soma: ${soma})`;
    resp2.innerText = `${num} não é um Número Perfeito`;
  }
});

frm.addEventListener("reset", () => {
  resp1.innerText = "";
  resp2.innerText = "";
});
