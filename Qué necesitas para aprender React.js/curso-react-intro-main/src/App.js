import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaulTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el Curso de Introduccion a React.js', completed: false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'La La La', completed: false},
//   {text: 'Curso de Introduccion a React.js', completed: false}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos))
// localStorage.removeItem('TODO_v1')

function useLocalStorage(itemName, initialValue){    

  const localStorageItem = localStorage.getItem(itemName)
  
  let parsedItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue) )
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem] =  React.useState(parsedItem)
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}


function App() {  
  // Hoks
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');  // Se cola un string vacio

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
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
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
export default  App 
