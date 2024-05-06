import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaulTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el Curso de Introduccion a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'La La La', completed: false},
  {text: 'Curso de Introduccion a React.js', completed: false}
];


function App() {
  const [todos] = React
    .useState(defaulTodos);
  const [searchValue, setSearchValue] = React
    .useState('');  // Se cola un string vacio

  const completedTodos = todos.filter(
    todo => !!todo.completed).length;

  const totalTodos = todos.length;    
  
  const searchTodo = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);    
    } 
  )

  // Mostramos el cambio de estado
  console.log("Los usuarios buscan todos de " + searchValue);
  return (
    <>   
      <TodoCounter
       completed={completedTodos}
       total={totalTodos}
        />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchTodo.map(todo => (
        <TodoItem
         key={todo.text}
         text={todo.text}
         completed={todo.completed}
         />
      ))};
      </TodoList> 
      <CreateTodoButton/>   
    </>
  );
}
export default App;
