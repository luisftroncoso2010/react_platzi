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
  // Hoks
  const [todos, setTodos] = React
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }

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
         onComplete={() => completeTodo(todo.text)}
         onDelete={() => deleteTodo(todo.text)}
         />
      ))};
      </TodoList> 
      <CreateTodoButton/>   
    </>
  );
}
export default App;
