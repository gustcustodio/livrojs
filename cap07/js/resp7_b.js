const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = frm.inFrase.value.toUpperCase();
  const fraseNoSpace = frase.replace(/ /g, "");
  const fraseInvertida = fraseNoSpace.split("").reverse().join("");

  let resposta = "";

  if (frase.indexOf(" ") == -1) {
    alert("Informe uma frase!");
    frm.inFrase.focus();
    return;
  }

  if (fraseNoSpace == fraseInvertida) {
    resposta = `${frase} é um Palíndromo`;
  } else {
    resposta = "Não é um Palíndromo";
  }

  /* 
  console.log(frase);
  console.log(fraseNoSpace);
  console.log(fraseInvertida); 
  */

  resp.innerText = resposta;
});
