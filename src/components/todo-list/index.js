import './style.css';
import ToDoItemComponent from './todo-item';
import TodosContext from '../../context/todo.context';
import {useContext} from 'react'

const ToDoListComponent = () => {

    const {todos} = useContext(TodosContext);

 return (
  <div className='todo-page'>
    {todos.map(el => {

        return <ToDoItemComponent id = {el.id} text = {el.text} date = {el.date} /> 
        
    })}
  </div>
 );
};

export default ToDoListComponent;