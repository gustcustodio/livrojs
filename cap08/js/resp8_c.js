const frm = document.querySelector("form");
const convenio = document.querySelector("#selectConvenio")
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.rbSim.addEventListener("click", () => {
    selectConvenio.className = "exibe";
})

frm.rbNao.addEventListener("click", () => {
    selectConvenio.className = "oculta";
})