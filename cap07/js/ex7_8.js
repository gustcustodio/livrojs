const frm = document.querySelector("form");
const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataVenc = frm.inDataVenc.value;
    const valor = Number(frm.inValor.value);
    const hoje = new Date();
    const vencimento = new Date();

    const partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1]) - 1);
    vencimento.setFullYear(Number(partes[0]));

    const atraso = hoje - vencimento;
    let multa = 0;
    let juros = 0;

    if (atraso > 0) {
        const dias = atraso / 86400000;
        multa = valor * TAXA_MULTA;
        juros = valor * TAXA_JUROS * dias;
    }

    const total = valor + multa + juros; 

    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);
})