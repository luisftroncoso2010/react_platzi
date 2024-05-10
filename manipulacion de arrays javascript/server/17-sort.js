console.log('-- Organizar arrays: ');
const months = ["March", "Jan", "Feb", "Dec"];
/* Los organiza de acuerdo al abecedario */
console.log('   * Ordenamiento palabras: ', months.sort());

const numbers = [1, 30, 4, 21, 100000];
console.log('  * Ordenamiento numbers: ', numbers.sort());
console.log('      - Menor a Mayor: ', numbers.sort((a, b) => a - b));
console.log('      - Mayor a Menor: ', numbers.sort((a, b) => b - a));

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log('   * Caracteres especiales: ', words.sort());


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log('      - Mayor a Menor: ', orders.sort((a, b) => a.total - b.totala));



