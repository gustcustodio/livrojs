const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; // declara vetor global

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value;
  pacientes.push(nome); // adiciona o nome no final do vetor
  let lista = ""; // string para concatenar os pacientes

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]} \n`;
  }

  respLista.innerText = lista; // exibe a lista de pacientes na página
  frm.inPaciente.value = ""; // limpa o conteúdo do campo de formulário
  frm.inPaciente.focus(); // posiciona o cursor no campo
});

// adiciona um "ouvinte" para o evento click no btUrgencia que está no form:
frm.btUrgencia.addEventListener("click", () => {
  // verificase as validações do form estão ok (no caso, paciente is required):
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência");
    frm.inPaciente.focus(); // posiciona o cursor no campo inPaciente
    return; // retorna ao form
  }

  const nome = frm.inPaciente.value;
  pacientes.unshift(nome); // adiciona o paciente no início do vetor
  let lista = ""; // string para concatenar pacientes

  // forEach aplicado sobre o array pacientes:
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`));

  respLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

// adiciona um "ouvinte" para o evento click no btAtender que está no form:
frm.btAtender.addEventListener("click", () => {
  if (pacientes.length == 0) { // verificação do número de pacientes do vetor
    alert("Não há pacientes na lista de espera");
    frm.inPaciente.focus();
    return;
  }

  // remove do início da fila (e obtém o nome), colocando-o na variável atender:
  const atender = pacientes.shift();
  respNome.innerText = atender; // exibe o nome do paciente em atendimento
  let lista = ""; // string para concatenar pacientes

  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`));
  respLista.innerText = lista; // exibe a lista de pacientes na página
});
