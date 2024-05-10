/*
Esto es para validar patrones de string, por ejemplo:
    * split: Para separar de acuerdo a un patron
    * join: Para unificar de acuerdo a un patron
*/
const elements = ['fiere', 'Air', 'Water']
console.log('--- Seperador con join: ')

let rtaFinal = ''
const separator = '--'

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}
const rtaJoin = elements.join(', ')
console.log('   * Rta con Join: ', rtaJoin); 
console.log('       - Tipo: ',typeof rtaJoin);
console.log('   * For seperator: ', rtaFinal);
console.log('       - Tipo: ',typeof rtaJoin);

const title = 'Manipulacion de arrays';
// Crea una nuevo array (Cada palabra es un elemento del mismo)
console.log('-- Manipulacion de Array: ');
console.log('   * split, separar: ', title.split(' '));
const urlFinal = title.split(' ').join('/').toLowerCase();
console.log('   * join, unificar (url final): ', urlFinal);
console.log('   - tipo de unicacion: ', typeof urlFinal);

