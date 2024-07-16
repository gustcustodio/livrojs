frm = document.querySelector('form')
resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const horaBrasil = Number(frm.inHora.value)
    let horaFranca = horaBrasil + 5

    if (horaFranca > 24) {
        horaFranca -= 24        
    }

    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`

    e.preventDefault()
})