// Objetos
const orders = [
    {
        custumerName: 'Luis',
        total: 60,
        delievered: true
    },
    {
        custumerName: 'Leo',
        total: 50,
        delievered: false
    },
    {
        custumerName: 'Ana',
        total: 10,
        delievered: true
    },
    {
        custumerName: 'Ana',
        total: 20,
        delievered: false
    }
]
console.log('Objeto Original: ', orders);
const rtas = orders.map(item => item.total)
console.log('Sacamos los Totales (Del objeto original): ', rtas);

/* Creamos una variable con la copia del objeto
    (Este guarda la referencia en memoria) */
// const rtasDos = orders.map((item) => {
//     item.tax = .19
//     return item
// })

// console.log('Respuesta dos: ', rtasDos);
// console.log('Original: ', orders);

console.log('Creamos un nuevo Objeto sin modificar el Original (Rtas 3): ');
const rtasTres = orders.map((item) => {
    return {
        ...item,
        tax: .19
    }
})

console.log(rtasTres);
console.log('Objeto Original: ', orders)

