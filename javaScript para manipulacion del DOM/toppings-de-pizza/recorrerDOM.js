/* Recorrer el DOM */
const listaDeToppings = document.getElementById('lista-toppings')
console.log(listaDeToppings);

/* Me arroja el elemento padre y escalamos */
console.log(listaDeToppings.parentElement.parentElement)
/* Me arroja la listas del  */
console.log(listaDeToppings.parentNode);

/* Traemos los  hijos del elemento escogido*/
console.log(listaDeToppings.children);

/* Accede al primer node hijos de un elemento en especifico */
console.log(listaDeToppings.firstChild);

/* Muestra le primer elemento del hijo */
console.log(listaDeToppings.firstElementChild);

/* Hermanos del elemento, esta en la misma linea del elemento padre*/
console.log(listaDeToppings.previousElementSibling);

/*Proximos elemento, otro hermano */
console.log(listaDeToppings.nextElementSibling);

/*La palabra eleet */
console.log(listaDeToppings.previousSibling);