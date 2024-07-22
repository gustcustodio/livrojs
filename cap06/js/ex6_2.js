const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = []; // vetor de escopo global com números ja apostados
const sorteado = Math.floor(Math.random() * 100) + 1; // número aleatório entre 1 e 100
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  if (numero == sorteado) {
    respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
    frm.btSubmit.disabled = true; // troca o status do btSubmit
    frm.btNovo.className = "exibe"; // altera o nome da classe do btNovo
  } else {
    if (erros.includes(numero)) {
      // verifica se o número digitado já consta no vetor erros
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero); // adiciona número ao vetor com o método push(final do vetor)
      const numErros = erros.length; // obtém tamanho do vetor
      const numChances = CHANCES - numErros; // calcula o número de chances

      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;

      if (numChances == 0) {
        alert("Suas chances acabaram...");
        frm.btSubmit.disabled = true; // troca o status do btSubmit
        frm.btNovo.className = "exibe"; // altera o nome da classe do btNovo
        respDica.innerText = `Game over!! Número sorteado: ${sorteado}`;
      } else {
        const dica = numero < sorteado ? "maior" : "menor";
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }

  frm.inNumero.value = ""; // limpa o campo de entrada
  frm.inNumero.focus();
});

frm.btNovo.addEventListener("click", () => {
  location.reload();
});
