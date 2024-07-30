const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // obtém o nome informado e retira espaços em branco do início e final da string:
  const nome = frm.inFuncionario.value.trim();

  // se o nome não (!) possuir espaço:  
  if (!nome.includes(" ")) {
    alert("Informe o nome completo...");
    return;
  }

  const priEspaco = nome.indexOf(" "); // posição do primeiro espaço
  const ultEspaco = nome.lastIndexOf(" "); // posição do último espaço
  // copia o nome e sobrenome usando os parâmetros substr():
  const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  resp.innerText = `Crachá: ${cracha}`;
  console.log(priEspaco);
  console.log(ultEspaco);
});
