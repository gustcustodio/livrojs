const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNumero.value);

  let estrelas = ""; // teste de depuração
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
        estrelas = estrelas + '*'
    } else {
        estrelas = estrelas + '-'
    }
  }

  resp.innerText = estrelas
});
