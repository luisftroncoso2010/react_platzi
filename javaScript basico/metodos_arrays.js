/*Obejoto */
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

console.log(articulos);

console.log('--- Filter :');
var articulosFiltrado = articulos.filter(function (articulo) {
    return articulo.costo <= 500    
})

console.log('   * Articulos menores o iguales a 500: ', articulosFiltrado)

console.log('--- Map :');

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
})

console.log('   * Nombre de los articulos', nombreArticulos)

console.log('--- find(): ')

var variedad = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
]

var encuentraArticulo = variedad.find(function(articulo){
    return  articulo.nombre === 'Laptop'
})

console.log('   * El articulo es: ', encuentraArticulo);

console.log('--- For each: ');  //No genera un nuevo array

variedad.forEach(function(articulo){
    console.log(articulo.nombre)
}) 

console.log('--- some : ');
 // Solo devuelve un valor boleeano, si cumple la condicion o no
var articulosBaratos = variedad.some(function(articulo){
    return articulo.costo <= 700
})

console.log('   * Articulos Baratos: ', articulosBaratos); 

console.log('--- shif');  // Elimina el primer elemento del array

var frutas = ['Pera', 'Manzana', 'Uvas']
frutas.shift()
console.log('   * El array modificado es: ', frutas);

frutas.pop()  // elimina el ultimo elemento del array
console.log('   * Eliminando un elemento del array:', frutas);  

console.log(' --- Practica de objetos: ');

const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
  function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }

console.log(solution(cars));



//*dcscdscdsc *//

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}