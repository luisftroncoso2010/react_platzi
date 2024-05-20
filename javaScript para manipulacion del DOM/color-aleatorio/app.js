/* Seleccionar los elementos del dom */
const boton = document.querySelector('button')
const color = document.getElementById('color')
console.log(boton);

/* Generamos un color aleatoriovbg */
function generarColorHexAleatorio(){
    let digitos = '0123456789ABCDEF'
    let colorHex = '#'
    console.log();

    for (let i = 0; i < 6; i++) {
        /* Generamos un numero entra 0 y 15 */
        let indiceAleatorio = Math.floor(Math.random() * 16);  
        colorHex += digitos[indiceAleatorio]      
    }    
    return colorHex
}

boton.addEventListener('click', function(){
    /* Obtenemos el color aleatorio */
    let colorAleatorio = generarColorHexAleatorio()
    /* Actualizamos el color del texto */
    color.textContent = colorAleatorio
    /* Accedemos el elemento body */
    document.body.style.backgroundColor = colorAleatorio 
})
