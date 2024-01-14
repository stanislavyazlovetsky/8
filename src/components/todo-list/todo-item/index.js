import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import TodosContext from '../../../context/todo.context';
import {useContext} from 'react';

/**
 * 
 * @param {Object} props 
 * @param {string} props.text
 * @param {Date} props.date
 * @returns 
 */
const ToDoItemComponent = (props) => {

 const text = props.text || "Text of todo item";
 const date = (props.date || new Date()).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
   });
 const id = props.id;

 const {deleteTodoItem, setTodoIdForEdit, getTodoItem} = useContext(TodosContext);

 const deleteTodoButton = () => {

  deleteTodoItem(id);



 };

 const updateTodoButton = () => {

  setTodoIdForEdit(id);

  getTodoItem(id);

  };

 return (
    <div>
        <div className='todo-list'>
           <div>
            <input class="form-check-input" type="checkbox" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1"></label>
            <span class="todo-text">{text}</span>
           </div>
           <span class="todo-data">{date}</span>
           <span class="trash-button" onClick = {deleteTodoButton}>
            <FontAwesomeIcon icon={faTrash} />
           </span>
           <span class="pan-button" onClick = {updateTodoButton}>
            <FontAwesomeIcon icon={faPen} />
           </span>
            </div>
            {/* <TodosContext.Provider value={{updateTodoButton}}> </TodosContext.Provider>  */}

    </div>
 );
};

export default ToDoItemComponent;