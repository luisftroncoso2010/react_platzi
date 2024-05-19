/* Personaliar un elemento con javaScript */
const primerTooping = document.querySelector('.topping')
console.log(primerTooping.style);  // Contenido del estilo

// Cambiamos el color del backgrounColor
primerTooping.style.backgroundColor = 'blue'

// Cambiamos el color de la letra
primerTooping.style.color = '#6dff00'

// Transfomamos el color a mayusculas
primerTooping.style.textTransform = 'uppercase'

console.log('--- Objeto con todos los estilos que se oyeden usar en la etiqueta: ');
// Obtenemos un objeto con todos los estilos que se pueden hacer
const computedStyles = window.getComputedStyle(primerTooping)
//console.log(computedStyles);

console.log('--- Texto en el DOM ---');
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings);

console.log('> innerText: ');
// Arroja los texto interno del elemento
console.log(listaDeToppings.innerText);

console.log('> textContent: ');
// Arroja los texto interno del elemento incluyento los espacios que tenga en el HTML
console.log(listaDeToppings.textContent);

console.log('> innerHtml: ');
// Arroja todo el contenido que tenga el elemento
console.log(listaDeToppings.innerHTML);


const titulo = document.getElementById('titulos')
//Modificamos el texto del elemento en el DOM
titulo.innerText = 'Mis Toppings Favoritos'

console.log('--- Modificar lso atributos de un elemento ---');
const enlace = document.getElementsByTagName('a')
console.log('   * Atributo del elemento: ', enlace[0].getAttribute('href'));
console.log('   * Eliminamos Atributo del elemento: ', enlace[0].removeAttribute('href'));
console.log('   * Obtenemos Atributo del elemento: ', enlace[0].getAttribute('href'));
console.log('   * Asignamos valor al Atributo del elemento: ')
console.log(enlace[0].setAttribute('href', 'https://wwww.twitter.com')); 

console.log('   * Clases con JavaScript y el DOM *  ');

/* Agregar y modificar clases */
const primer_Topping = document.querySelector('.topping')
console.log('   * Lista de clases: ');
console.log(primer_Topping.classList);

// Agregamos una clase especifica
console.log('   * Agregar una clase a un elemento: ');
primer_Topping.classList.add('mi-clase')
console.log(primer_Topping.classList);

primer_Topping.classList.add('texto-verde')
console.log(primer_Topping.classList);

console.log('--- Verificar si una clase existe y eliminar una clase ---');

const primer_Topping_ = document.querySelector('.topping')
console.log(primer_Topping_.classList.contains('texto-verde'));
console.log(primer_Topping_.classList.contains('texto-azul'));
console.log(primer_Topping_.classList.remove('texto-verde'));