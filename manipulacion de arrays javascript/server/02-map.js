// Array original
const letters = ['a', 'b', 'c']

// Creamos un nuevo array
const newArray = []

// Recorremos el array y vamos pusheando la New array
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++')
}
console.log('Array Original', letters);
console.log('New Array', newArray);

console.log("--. Trabajamos con maps: ");

const arrayNew = letters.map(item => item + '++')
console.log("Array New: " + arrayNew);

console.log("--- Join:");
const array = ['apple', 'banana', 'orange'];

// Combina los elementos del array con una coma y un espacio como separador
const joinedString = array.join(', ');
console.log(joinedString); 
