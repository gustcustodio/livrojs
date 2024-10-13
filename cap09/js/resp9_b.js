// todo Elaborar um programa para cadastrar produtos na lista de compras da semana. Salvar a listagem dos produtos em ordem alfabética. //

const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const verProdutoExiste = (nomeProduto) => {
  if (localStorage.getItem("produtos")) {
    // * cria um vetor com os valores da chave produtos * //
    const produtos = localStorage.getItem("produtos").split(";");
    // * verifica através do método includes se o produto já consta na chave produtos * //
    return produtos.includes(nomeProduto);
  } else {
    return false;
  }
};

const mostrarProdutos = () => {
  if (!localStorage.getItem("produtos")) {
    respLista.innerText = "";
    return;
  }

  // * cria um vetor com os valores da chave produtos * //
  const produtos = localStorage.getItem("produtos").split(";");

  // * odernação do vetor por ordem alfabética utilizando o método sort * //
  produtos.sort();

  let linhas = "Produtos adicionados\n";
  linhas += "--------------------\n";

  for (let produto of produtos) {
    linhas += produto + "\n";
  }

  respLista.innerText = linhas;
};

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeProduto = frm.inProduto.value;

  // * chama a funçao de verificação de produto * //
  if (verProdutoExiste(nomeProduto)) {
    alert("Produto já consta na lista, informe outro...");
    frm.inProduto.value = "";
    frm.inProduto.focus();
    return;
  }

  if (localStorage.getItem("produtos")) {
    // * obtém o conteúdo já salvo e acrescenta ";" + nomeProduto * //
    const produto = localStorage.getItem("produtos") + ";" + nomeProduto;
    // * salva os dados * //
    localStorage.setItem("produtos", produto);
  } else {
    // * senão, é o primeiro produto * //
    localStorage.setItem("produtos", nomeProduto);
  }

  mostrarProdutos();
  frm.reset();
  frm.inProduto.focus();
});

frm.btLimpar.addEventListener("click", () => {
  if (confirm("Confirma a exclusão de todos os produtos?")) {
    localStorage.removeItem("produtos");
    mostrarProdutos();
  }
});

window.addEventListener("load", mostrarProdutos);
