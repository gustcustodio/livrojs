const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensagem = frm.inMensagem.value;
    const tamanho = mensagem.length;

    let par = "";
    let impar = "";

    for (let i = 0; i <= tamanho; i++) {
        if (i % 2 == 0) {
            par += mensagem.charAt(i);
        } else {
            impar += mensagem.charAt(i);
        }
    }

    console.log(tamanho);
    console.log(par);
    console.log(impar);

})

/* 
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const mensagem = frm.inMensagem.value;

  let resposta = "";
  const tam = mensagem.length;

  for (let i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  for (let i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  resp.innerText = resposta;
});
*/