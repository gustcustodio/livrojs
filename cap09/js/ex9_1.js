const frm = document.querySelector("form");
const imgClube = document.querySelector("#imgClube");
const divTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
  let clube;

  if (frm.rbBrasil.checked) {
    clube = "Brasil";
  } else if (frm.rbPelotas.checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }

  // * define a classe de divTitulo * //
  divTitulo.className = `row cores-${clube}`;

  // * modifica a imagem de acordo com a seleção do clube * //
  imgClube.src = `img/${clube.toLowerCase()}.png`;
  // * muda a class para exibir a img * //
  imgClube.className = "img-fluid";
  // * modifica o atributo alt * //
  imgClube.alt = `Símbolo do ${clube}`;

  // * salva no navegador a escolha do cliente * //
  localStorage.setItem("clube", clube);
};

frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
  if (localStorage.getItem("clube")) {
    const clube = localStorage.getItem("clube");

    if (clube === "Brasil") {
      frm.rbBrasil.checked = true;
    } else if (clube === "Pelotas") {
      frm.rbPelotas.checked = true;
    } else {
      frm.rbFarroupilha.checked = true;
    }
    trocarClube();
  }
};

window.addEventListener("load", verificarClube());
