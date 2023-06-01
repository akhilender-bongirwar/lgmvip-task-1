import React, { useState } from 'react'
import ToDoForm from './ToDoForm';

function ToDoList() {
    const [toDoItem,setToDoItem] = useState([]);
    const addToDo = (toDo)=>{
        if(!toDo){
            return;
        }
        const newTasks = [toDo,...toDoItem];
        setToDoItem(newTasks);
    }
    
  return (
    <ToDoForm addToDo={addToDo} />
  )
}

export default ToDoList