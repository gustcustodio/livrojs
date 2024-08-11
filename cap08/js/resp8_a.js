const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function categorizarAluno(idade) {
  let categoria = "";

  if (idade <= 12) {
    categoria = "Infantil";
  } else if (idade >= 13 && idade <= 18) {
    categoria = "Juvenil";
  } else {
    categoria = "Adulto";
  }
  return categoria;
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);

  resp.innerText = `Categoria: ${categorizarAluno(idade)}`;
});
