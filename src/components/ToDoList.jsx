import React, { useState } from 'react'
import ToDoForm from './ToDoForm';
import ToDoItems from './ToDoItems';

function ToDoList() {
    const [toDoItem,setToDoItem] = useState([]);
    const addToDo = (toDo)=>{
        if(!toDo.value){
            return;
        }
        const newTasks = [toDo,...toDoItem];
        setToDoItem(newTasks);
    }

    const removeToDo = id =>{
        const newArr = [...toDoItem].filter(todo => todo.id !== id);
        console.log(newArr);
        setToDoItem(newArr);
    }
    const completedTodo = id =>{
        let upDatedToDo = toDoItem.map((toDo)=>{
            if(toDo.id === id){
                toDo.isDone=!toDo.isDone;
            }
            return toDo;
        })
        console.log(upDatedToDo);
        setToDoItem(upDatedToDo);
    }

  return (
    <div>
    <ToDoForm addToDo={addToDo} />
    <ToDoItems toDoItem={toDoItem} completedTodo={completedTodo} removeToDo={removeToDo} />
    </div>
  )
}

export default ToDoList