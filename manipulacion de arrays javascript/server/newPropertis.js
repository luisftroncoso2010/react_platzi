const Input =
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

// Freases y palabras 
const palabras =  [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
  "Hola soy luis"
]


// 
function addNewAttr(array) {  
    const rtasTres = array.map((item) => {
        return {
            ...item,
            taxes: item.price * .19
        }
    })
    return rtasTres
}

console.log("Input: ", addNewAttr(Input));



// Contador de palabras
function countWords(array) {  
  return array.flatMap(item => item.split(' ').length).reduce((sum, item) => sum + item, 0)
}

console.log("Palabras: ", countWords(palabras));
  

