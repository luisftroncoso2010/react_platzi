/* Crear un elemnto en el DOM */
const listaDeToppings = document.getElementById('lista-toppings')
/* Creamos elemento */
const toppingNuevo = document.createElement('li')
/* Agregamos clases al elemento */
toppingNuevo.classList.add('topping', 'fondo-marron')
/*Agregamos el texto */
toppingNuevo.innerText = 'Queso Extra'
/* Agrega un node en la lista */
listaDeToppings.append(toppingNuevo, 'Queso')
listaDeToppings.append('Hola Luis')  // Esto solo agra una texto en el HTML


/* Eliminamos el elemento */
//toppingNuevo.remove();

/* eliminamos la lista. Es decir el elemnto*/
//listaDeToppings.remove()


