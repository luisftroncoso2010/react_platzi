import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaulTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar el Curso de Introduccion a React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'La La La', completed: false},
  {text: 'Curso de Introduccion a React.js', completed: false}
];


function App() {
  return (
    <>   
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaulTodos.map(todo => (
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
