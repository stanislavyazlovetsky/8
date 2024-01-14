import { useState } from 'react';
import './style.css';
import ToDoInputComponent from './todo-input';
import ToDoListComponent from './todo-list';
import TodosContext from '../context/todo.context';
import { v1 as uuidv1 } from 'uuid';

function App () {

  const [todos, setTodos] = useState([]);

  const [todoIdForEdit, _setTodoIdForEdit] = useState(null)
  const setTodoIdForEdit = (id) => {
    _setTodoIdForEdit(id)
  }

  const [localStorageTodos, setLocalStorageTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todoStorageElement");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodoItem = (text) =>{

    setTodos(prev => ([...prev, {localStorageTodos}]));

    localStorageTodos.push({
     id: uuidv1(),
     text: text, 
     date: new Date().toLocaleString(),
    });

   localStorage.setItem("todoStorageElement", JSON.stringify(localStorageTodos));

  };

  const getTodoItem = (id) =>{

    localStorage.getItem(id);

  };

  const filterTodoItem = (id) => {
    const updatedTodos = localStorageTodos.filter(todo => todo.id !== id);
    setLocalStorageTodos(updatedTodos);
    localStorage.setItem("todoStorageElement", JSON.stringify(updatedTodos));
  };

  const deleteTodoItem = (id) => {
    if (id) {
      filterTodoItem(id);
    }
  };

  return (
    <div className="App">

      <TodosContext.Provider value={{
        todoIdForEdit,
        setTodoIdForEdit,
        todos: localStorageTodos,
        addTodoItem, 
        deleteTodoItem, 
        getTodoItem}}>    

      <ToDoInputComponent />
      <ToDoListComponent />

      </TodosContext.Provider>
    </div>
  );
}

export default App;
