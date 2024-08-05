const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const frase = frm.inFrase.value.toUpperCase();
    const fraseInvertida = frase.split('').reverse().join('').toUpperCase();
    let resposta = "";

    if (frase == fraseInvertida) {
        resposta = `${frase} é um Palíndromo`;
    } else {
        resposta = "Não é um Palíndromo";
    }

    resp.innerText = resposta;
})