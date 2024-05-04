import './TodoCounter.css';
/* props */
function TodoCounter({total, completed}) {
    return(
    /*Stilos en linea */
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span>  de <span>{total}</span> TODOS
      </h1>
    );
  }
  

export { TodoCounter };