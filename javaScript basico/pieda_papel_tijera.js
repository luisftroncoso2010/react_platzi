console.log('--- Juego piedra, papel o tijera ---');
let array = ['piedra', 'papel', 'tijera']
function maquina(array) {    
    const longitud = array.length;
    const indiceAleatorio = Math.floor(Math.random() * longitud);
    return array[indiceAleatorio];
}

function jugador(array) {    
    const longitud = array.length;
    const indiceAleatorio = Math.floor(Math.random() * longitud);
    return array[indiceAleatorio];
}

const eleccionJugador = jugador(array);
const eleccionMaquina = maquina(array);

console.log("   * Jugador: " + eleccionJugador + "\n   * Maquina: "  + " " + eleccionMaquina);

if(eleccionJugador === eleccionMaquina){
        console.log("Empate")
}else if (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera' ||
        eleccionJugador === 'papel' && eleccionMaquina === 'piedra' ||
        eleccionJugador === 'tijera' && eleccionMaquina === 'papel'){
        console.log('Ganaste!')    
}else {
    console.log('Has perdido!')
}

