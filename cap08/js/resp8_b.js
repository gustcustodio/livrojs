const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function validarNome(nome) {
  let confereNome = true;
  if (!nome.includes(" ")) {
    confereNome = false;
  }
  return confereNome;
}

function obterSobrenome(nome) {
  let sobrenome = "";
  let partes = nome.split(" ");
  sobrenome = partes[partes.length - 1];
  return sobrenome.toLowerCase();
}

function contaVogais(nome) {
    let vogais = nome.match(/[aeiouAEIOU]/g);
    let contador = vogais ? vogais.length : 0;
    return contador.toString().padStart(2, "0");    
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const sobrenome = obterSobrenome(nome);
  const vogais = contaVogais(nome);

  if (validarNome(nome)) {
    resp.innerText = sobrenome + vogais;
  } else {
    resp.innerText = `Informe o nome completo!`;
    frm.reset();
    frm.inNome.focus();
    return;
  }
});
