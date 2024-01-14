import './style.css';
import TodosContext from '../../context/todo.context';
import { useRef, useContext } from 'react';


const ToDoInputComponent = () => {

    const { todoIdForEdit, addTodoItem } = useContext(TodosContext)

    const addRef = useRef();

    // const updateButton = document.querySelector(".update");

    // const addButton = document.querySelector(".add");

    const addInput = () => {

        const reading = addRef.current.value;

        if (reading === "") {

            return

        };

        addTodoItem(reading);

        addRef.current.value = "";

    };

    const updateInput = () => {

        const reading = addRef.current.value;

    };



    return (
        <div className='todo-input-section'>
            <input ref={addRef} type="text" placeholder="Add item..." />
            {!todoIdForEdit ?
                <button onClick={addInput} type="submit" class="add">
                    Add
                </button>
                : <button id="update-button" type="button" class="update">
                    Update
                </button>}
            <div id="search">
                <input id="search-input" type="text" placeholder="Search" />
                <span>X</span>
            </div>
            <button id="search-button" type="button" class="search">Search</button>

            {/* <TodosContext.Provider value={{ updateInput }}>

                <div></div>
            </TodosContext.Provider> */}

        </div>
    );
};

export default ToDoInputComponent;