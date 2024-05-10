const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];


console.log("Array original, products", products);
console.log("New Array, myProducts", myProducts);
console.log("-".repeat(10));


console.log('-- Mutacion: ');
/* finIndex trae el indece del elemento */
const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1) {
    myProducts.push(products[productIndex])
    let copiProducts = [...products].splice(productIndex, 1)
    console.log("Array copia:", copiProducts);
    copiProducts.splice(productIndex, 1)
    console.log("Array copia (eliminando elemtneto): ", copiProducts);
}

console.log("Array original, products", products);
console.log("New Array, myProducts", myProducts);
console.log("-".repeat(10));

console.log('-- Mutacion filter: ');
const productsDos = products.filter(item => item.id != '🍔')
console.log("   * Copia del original, products Dos" , productsDos)

console.log('-- Update: ')
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🍔',
    changes: {
        price: 200,
        description: 'delicioso'
    }    
}

const sinModificar = productsV2.map(item => {
    if(item.id === update.id){
        return {
            ...item,
            ...update.changes
        }
    }
    return {...item}
})

console.log('   * Array V2 sin modificiar: ', sinModificar)

console.log('   * Sin modificar (Original): ', productsV2)

const productIndexV2 = productsV2.findIndex(update => update.id === '🍔')
productsV2[productIndexV2] ={
    ...productsV2[productIndexV2],
    ... update.changes
};


console.log('   * products V2 Modificacando el array: ', productsV2);
