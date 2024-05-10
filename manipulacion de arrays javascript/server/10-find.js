const number = [40, 50, 50, 81, 70]

console.log('Buscamos un elemento en especifico');
let rta = undefined
for (let index =     0; index <  number.length; index++   ) {
    const element = number[index];   
    if(element === 30){
        rta = element
        break;
    }
}

console.log('   * For: ', rta);
// Si el elemento no lo cuenta retorna un undfefine
const rtaDos = number.find(item => item === 50)
console.log('   * Rta Dos: ', rtaDos);

console.log('--- Trabajamos con un objeto: ')
const products = [
    {
        name: 'Pizza',
        price: 12,
        id: 1
    },
    {
        name: 'Hamburguesa',
        price: 18,
        id: 2
    },
    {
        name: 'Salchi Papa',
        price: 20,
        id: 3
    },
    {
        name: 'Maiz',
        price: 7,
        id: 4
    },
    {
        name: 'Papa',
        price: 8,
        id: 5
    },
    {
        name: 'Salchicha',
        price: 98,
        id: 6
    },
    {
        name: 'Chorizo',
        price: 21,
        id: 7
    },
]
/* Buscamos el objeto, si no está devuevle undefine */
const rtasTres = products.find(item => item.id === 2)
console.log('   * Rtas tres, objeto : ', rtasTres);

/* Buscamos la poscion del elemento */
const rtasCuatro = products.findIndex(item => item.id === 2)
console.log('   * Rtas cuadro, posicion : ', rtasCuatro);
