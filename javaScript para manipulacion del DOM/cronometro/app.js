const cronometro = document.getElementById('cronometro')
const botonInicioPausa = document.getElementById('boton-inicio-pausa')
const botonReiniciar = document.getElementById('boton-reiniciar')

// Asignamos valores a las variables (Desempaquetar)
let [horas, minutos, segundos] = [0, 0, 0]

// Creamos variable auxiliaries
let intervaloDeTiempo

// Credeamos el estado inicial del cronometro
let estadoCronometro = 'pausado'

// Funcion para colocar a andar el cronometro
function actulizarCronometro(){
    /* Se empieza a contar los segundos */
    segundos ++
    /* Si llega a 60 segundos, se cuenta un minuto */
    if(segundos / 60 === 1){
        segundos = 0
        minutos++
        /* Si llega a 60 minutos, se cuenta una hora */
        if(minutos / 60 === 1){
            minutos = 0
            horas++
        }
    }

    // Variable auxiliar para guardar el estado de tiempo
    const segundosConFormato = asignarFormato(segundos)
    const minutosConFormato = asignarFormato(minutos)
    const horasConFormato = asignarFormato(horas)

    // Se toma el elemento para cambiar el texto,
    // y pasarle el formato y cambios de trascurso
    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`
}

// Funcion para formato del cronometro. Con parametro esado unidad de tiempo
function asignarFormato(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo
}

// Evento para iniciar el cronometro dependiento el estado
botonInicioPausa.addEventListener('click', function(){
    // Validamos el estado    
    if(estadoCronometro === 'pausado'){
        /*Llamamos a la funcion cada intervalo de timepo, cada mil mile segundos */
        intervaloDeTiempo = window.setInterval(actulizarCronometro, 1000)
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
        botonInicioPausa.classList.remove('iniciar')
        botonInicioPausa.classList.add('pausa')
        estadoCronometro = 'andando'
    }else{
        window.clearInterval(intervaloDeTiempo)
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
        botonInicioPausa.classList.remove('pausa')
        botonInicioPausa.classList.add('iniciar')
        estadoCronometro = 'pausado'
    }
})

botonReiniciar.addEventListener('click', function(){
    window.clearInterval(intervaloDeTiempo)
    horas = 0
    minutos = 0
    segundos = 0

    /* Reiniciar cronometro */
    cronometro.innerText = `00:00:00`

    // Actualizar botones
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonInicioPausa.classList.remove('pausa')
    botonInicioPausa.classList.add('iniciar')

    // Estado del cronometro
    estadoCronometro = 'pausado'
})