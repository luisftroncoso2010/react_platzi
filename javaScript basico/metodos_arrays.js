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