const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9]
]

console.log('--- Iterar un array profundo de:');
const newArray = []
for (let i = 0; i < matriz.length; i++) {
    let array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        let element = matriz[i][j]; 
        newArray.push(element)       
    }
}

console.log('   * For: ', newArray);
// Se le debe de dar la profundidad. Que tenga el array. 
const  rtaFlat = matriz.flat(3)
console.log('   * flat: ', rtaFlat);


