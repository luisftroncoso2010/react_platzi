/* Manejo de eventos 
        - Obtenemos el id del elemento que queremos trabajar*/
const toppings = document.getElementsByClassName('topping')
//console.log(toppings);

/* Creamos la funcion que nos traerá el el texto */
// function mostrarClick(e){
//     console.log(e.target.innerText);
// }

/* Recorremos la lista de topping y le pasamos la funcion  */
for(const topping of toppings){
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}

/* Mostar click */