const totales = [1, 2, 3, 4, 5]


console.log('--- Suma de todos los elemebtos de array. Ciclo for: ');
let sum = 0
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    sum = sum + element    
}

console.log('   * Suma: ', sum);

console.log('--- Suma elementos del arrya con reduce: ');
const rta = totales.reduce((sum, element) => sum + element, 0)
console.log('   * Suma Reduce: ', rta)