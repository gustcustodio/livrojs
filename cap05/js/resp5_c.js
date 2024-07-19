const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
let soma = 0;
let divisores = 0;
let resposta = "";

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);
  let resposta = `Divisores do ${num}: `;

  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      divisores = i;
      soma += i
      resposta += ` ${divisores},`;
    }
  }

  resp1.innerText = `${resposta} (Soma: ${soma})`;
});
