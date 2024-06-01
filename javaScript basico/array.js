/* Array */
var frutas = ['Manzana', 'Platano', 'Cereza', 'Fresa']

console.log(frutas);

/* Logintud del array */
console.log('Longitud: ', frutas.length);
console.log('Burcar elementos por indice: ', frutas[0]);

/*Mutar elementos. Agregar */
var masFrutas = frutas.push('Mango', 'Uvas')
console.log(frutas[5]);

/*Eliminar elementos del array */
var ultimo = frutas.pop()  // Elimina el ultimo elemento del array
console.log(frutas);

/* Agregamos elementos al inicio del array */
var nuvaLongitud = frutas.unshift('Mora')
console.log(frutas);

/* Elimina el primer elemento del inicio del array */
var borrarFruta = frutas.shift('Mora') /*NOTA: Solo elimina el primer elemento */
console.log(frutas);

/* Trae el indice del elemento */
var posicion = frutas.indexOf('Fresa')
console.log(posicion);

console.log(' --- Validando elementos del array ---')

console.log(typeof frutas[0]);


function solution(arraySecreto) {
    return (typeof arraySecreto[0] === 'string' ? true : false)
}

console.log(solution(frutas));
  