var numero = 100
/*Aca se validan los casos */
switch(numero){
    case 1:
        console.log('Soy uno!')
        /*Cierra cuando se cumple al condicion */
        break
    case 2:
        console.log('Soy un 10');
        break
    case 100:
        console.log('Si soy un 100');
        break
    default:
        console.log('No soy nada');
}

console.log('Piedra, papel o tijera: ');

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

switch (true) {
    case (eleccionJugador === eleccionMaquina):
        console.log('Empate!');
        break
    case (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera' ||        
        eleccionJugador === 'tijera' && eleccionMaquina === 'papel' ||
        eleccionJugador === 'papel' && eleccionMaquina === 'piedra'): 
        console.log('Ganaste!');
        break           
    default:
        console.log('Has perdido!')
        break;
}

console.log('--- Electordomesticos: ');

function solution(article) {
    switch (article) {
        case 'computadora':            
            return console.log('Con mi computadora puedo programar usando JavaScript')  
        case 'celular':
            return ('En mi celular puedo aprender usando la app de Platzi')
        case 'cable':
            return console.log('¡Hay un cable en mi bota!')
        default:               
           return console.log('Artículo no encontrado')    
    }
}

solution('computadora')

if(false === !true){
    console.log(false == true);
}else{
    console.log(true === !false);
}


if (false === !true){
    console.log(false == true) 
} 
else {
    console.log(true === !false) 
}