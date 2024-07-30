const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const funcionario = frm.inFuncionario.value;
  // divide o nome em items de vetor, criados a cada ocorrência de espaço: 
  const partes = funcionario.split(" ");
  let email = ""; // vai concatenar as letras
  const tam = partes.length; // obtém o nº de itens do vetor em partes
  
  // percorre os itens do vetor exceto o último:
  for (let i = 0; i < tam - 1; i++) {
    // obtém a letra inicial de cada item:
    email += partes[i].charAt(0);
  }

  // concatena as letras iniciais com a último parte (sobrenome) e empresa:
  email += partes[tam - 1] + "@empresa.com.br";

  console.log(partes)
  console.log(tam)
  console.log(partes[tam - 1])

  resp.innerText = `E-mail: ${email.toLowerCase()}`;
});
