const words = [ 'spray', 'limit', 'elite', 'exuberant'];
const newArray = []

console.log('---  Filtramos normalmente con un cilo: ');
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6) {
        newArray.push(element)
    }    
}
console.log('--- Array Original: ', words);
console.log('--- Palabras mayores que 6 letras: ', newArray);

console.log('--- Filtramos con el metodo filter: ');
const rta = words.filter(item => item.length >= 6)
console.log('--- Con filter (Valores mayores o iguales que 6): ', rta);


console.log('Trabajamos con Objetos: ');
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
        custumerName: 'Valdo',
        total: 1000,
        delievered: true
    },
    {
        custumerName: 'Morena',
        total: 100,
        delievered: true
    },
    {
        custumerName: 'ana',
        total: 100,
        delievered: true
    },
    {
        custumerName: 'Azul',
        total: 200,
        delievered: false
    }
]

const rtasDos =  orders.filter(item => item.delievered === true)
console.log('   * Entregados: ', rtasDos);

const rtasTres =  orders.filter(item => item.delievered === true &&
    item.total >= 100
    )
console.log('   * Entregados y Mayor o Igual que 100: ', rtasTres);

const search = (query) => {
    return orders.filter(item => {
        return item.custumerName.includes(query)
    })
}

console.log('Esto es un buscador de letras: ', search('A'));


