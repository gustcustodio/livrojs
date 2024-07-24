const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);
  criancas.push({ nome, idade }); // adiciona dados o vetor de objetos
  frm.reset();
  frm.inNome.focus();
  frm.btListar.dispatchEvent(new Event("click")); // dispara click em btListar
});

frm.btListar.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há crianças na lista!");
    return;
  }

  let lista = "";
  for (const crianca of criancas) { // percorre o array crianças
    const { nome, idade } = crianca; // desestrutura o objeto criança
    lista += nome + " - " + idade + " anos\n";
  }
  resp.innerText = lista;
});

frm.btResumir.addEventListener("click", () => {
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  const copia = [...criancas]; // cria um cópia do array de crinças (operador Rest)
  // ordena a cópia do array por idade usando o método sort e função de comparação:
  copia.sort((a, b) => a.idade - b.idade); 

  let resumo = "";
  // define a idade auxiliar como a idade da primeira criança: 
  let aux = copia[0].idade;
  let nomes = [];

  for (const crianca of copia) { // percorre a cópia do array de crianças
    const { nome, idade } = crianca; // desestrutura o objeto criança

    if (idade == aux) {
      nomes.push(nome);
    } else {
      resumo += aux + " anos(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = idade;
      nomes = [];
      nomes.push(nome);
    }
  }

  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ") \n\n";
  resp.innerText = resumo;
});
