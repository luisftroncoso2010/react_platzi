/*Importamos el archivo para darles los colores al botos */

import './CreateTodoButton.css';
function CreateTodoButton() {
    return(     
        <button className="CreateTodoButton"
        onClick={
            (event) => { console.log('Le diste click')
                         console.log(event)
                         console.log(event.target)
                    }
                }
            >+</button>      
    );
  }
  export { CreateTodoButton };