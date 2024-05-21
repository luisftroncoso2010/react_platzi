const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')


const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')


let rojo = inputRojo.value
let verde = inputVerde.value
let azul = inputAzul.value

textoRojo.innerText = rojo
textoVerde.innerText = verde
textoAzul.innerText = azul

function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB
}

// Para actulizar el RED (Rojo)
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value
    textoRojo.innerText = rojo
    actualizarColor(rojo, verde, azul)
})

// Para actulizar el Green (Verde)
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value
    textoVerde.innerText = verde
    actualizarColor(rojo, verde, azul) 
})

// Para actulizar el Green (Verde)
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value
    textoAzul.innerText = azul
    actualizarColor(rojo, verde, azul)
})

/* NOTA: Se deben coger atraves rgb, es decir
desde la variable global */