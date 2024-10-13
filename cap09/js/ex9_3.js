const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) {
    // * obtém o conteúdo e a string é dividida em itens de vetor a cada ";" * //
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // * o peso deve ser convertido em string, pois o vetor contém string * //
    // ! método includes; retorna verdadeiro caso o peso exista no vetor e falso, caso contrário ! //
    return pesos.includes(peso.toString());
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  // * se não há apostas armazenadas em localStorage * //
  if (!localStorage.getItem("melanciaNome")) {
    respLista.innerText = "";
    return;
  }

  // * obtém o conteúdo das variáveis salvas no localStorage, separando-as em elementos de vetor a cada ocorrência do ";" * //
  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  // * irá acumular as linhas a serem exibidas * //
  let linhas = "";

  // * repetição para percorrer todos os elementos do vetor * //
  for (let i = 0; i < nomes.length; i++) {
    linhas += nomes[i] + " - " + pesos[i] + "gr \n";
  }

  respLista.innerText = linhas;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const peso = Number(frm.inPeso.value);

  // * verifica se peso já foi apostaso * //
  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    frm.inPeso.focus();
    return;
  }

  // * se houver dados em localStorage * //
  if (localStorage.getItem("melanciaNome")) {
    // * obtém o conteúdo já salvo e acrescenta ";" + os dados da aposta * //
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    // * salva os dados * //
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    // * senão, é a primeira aposta * //
    localStorage.setItem("melanciaNome", nome);
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarApostas(); // mostra as apostas salvas
  frm.reset(); // limpa o form
  frm.inNome.focus(); // jogo o foco no campo inNome
});

frm.btVencedor.addEventListener("click", () => {
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return;
  }

  // * solicita o peso correto da melancia * //
  const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  // * valor inicial para vencedor é o da primeira aposta * //
  let vencedorNome = nomes[0];
  let vencedorPeso = pesos[0];

  for (let i = 1; i < nomes.length; i++) {
    // * calcula a diferença de peso do "vencedor" e da aposta atual * //
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    if (difAposta < difVencedor) {
      // * troca o vencedor * //
      vencedorNome = nomes[i]; 
      vencedorPeso = Number(pesos[i]); 
    }
  }

  let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
  mensagem += "\n-------------------------------------";
  mensagem += "\nVencedor: " + vencedorNome;
  mensagem += "\nAposta: " + vencedorPeso + "gr";
  alert(mensagem);
});

frm.btLimpar.addEventListener("click", () => {
  if (confirm("Confirma a exclusão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
    mostrarApostas();
  }
});

// * chama a function quando a página é carregada, para mostrar apostas salvas * //
window.addEventListener("load", mostrarApostas);
