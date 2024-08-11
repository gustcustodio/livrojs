const frm = document.querySelector("form");
const resp = document.querySelector("pre");

function retornarTracos(nome) {
  let tracos = "";
  nome.split(" ");

  for (const n of nome) {
    if (n == " ") {
      tracos += " ";
    } else {
      tracos += "-".repeat(n.length);
    }
  }
  return tracos;
}

function categorizarAluno(idade) {
  let categoria = "";

  if (idade <= 12) {
    categoria = "Infantil";
  } else if (idade <= 18) {
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
  const tracos = retornarTracos(nome);
  const categoria = categorizarAluno(idade);

  resp.innerText = nome + "\n" + tracos + "\nCategoria: " + categoria;
});
