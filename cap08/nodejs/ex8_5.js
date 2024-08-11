const prompt = require("prompt-sync")();

const vinhos = [];

function titulo(texto) {
  console.log();
  console.log(texto);
  console.log("=".repeat(40));
}

function incluir() {
  titulo("===< Inclusão de Vinhos >===");
  const marca = prompt("Marca: ");
  const tipo = prompt("Tipo: ");
  const preco = Number(prompt("Preço: "));
  vinhos.push({ marca, tipo, preco });
  console.log("Ok! Vinho cadastrado com sucesso.");
}

function listar() {
  titulo("===< Lista de Vinhos Cadastrados >===");
  console.log("Marca............... Tipo............... Preço R$")

  for (const vinho of vinhos) {
    
  }
}

do {
  titulo("===< Cadastro de Vinhos >===");
  console.log("1. Inclusão de vinhos");
  console.log("2. Listagem de vinhos");
  console.log("3. Pesquisa por tipo");
  console.log("4. Média e destaques");
  console.log("5. Finalizar");
  const opcao = Number(prompt("Opção: "));
  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesquisar();
  } else if (opcao == 4) {
    calcularMedia();
  } else {
    break;
  }
} while (true);
