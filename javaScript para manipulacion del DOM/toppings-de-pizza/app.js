console.log('--- Seleccion de elemntos por id: ');
const contenedor = document.getElementById('contenedor')
console.log(contenedor);
console.log(contenedor.innerHTML)  // Muestra toda la cadena de caracteres
console.log(typeof contenedor.innerHTML);

const titulo = document.getElementById('titulos')
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerText);  // Nos da el elemento que contiene dentro
console.log(titulo.tagName);  // Arroja el elemento de, la etiqueta

console.log('--- Seleccion de elementos por clases: ');
const toppings = document.getElementsByClassName('topping')
console.log(toppings);  // Muestra una colleccion html
console.log('Tamaño de la colleccion: ', toppings.length);
console.log('Entramos por indice: ', toppings[1]);
console.log(typeof toppings);

console.log('--- Seleccionamos un elemento en especifico (Etiqueta): ')
const misToopings = document.getElementsByTagName('li')  // Todos los elementos de etiqueita especifica
console.log(misToopings);  // Trae una collecion de elementos

// Elemtnos con una clase en especifica
const toppingsFondoMarron = document.getElementsByClassName('fondo-marron')
console.log(toppingsFondoMarron);

console.log('--- Seleccion con elemento con criterio css y etiquetas');

// Se Seelecionan los elementos de igual manera como se identifica en el css
const aceituna = document.querySelector('#aceitunas')
console.log(aceituna);

// Seleccionamos dos clases juntas, para ser mas especifico
const albahacas = document.querySelector('.topping.fondo-marron')
console.log(albahacas);
console.log(typeof albahacas);

// Buscamos por etiquetas y clase
const champiñones = document.querySelector('ul li.fondo-naranja')
console.log(champiñones);

// Con negacion 
const condicionales = document.querySelector('ul li:not(.fondo-marron)')
console.log(condicionales);
console.log(typeof condicionales);


console.log('--- Seleccion con elemento con criterio css y etiquetas');
const toppingNaranja = document.querySelectorAll('.topping.fondo-naranja')
console.log(toppingNaranja);
console.log(toppingNaranja.length);
console.log(typeof toppingNaranja);
