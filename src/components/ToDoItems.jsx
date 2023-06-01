import React from 'react'
import { MdDeleteForever,MdDone } from 'react-icons/md';


function ToDoItems({toDoItem,completedTodo,removeToDo}) {
  return  toDoItem.map((task,index)=>{
    return(
        <div className={task.completed?"completed-div-task":"div-task"} key={index}>
            <div className='toDo-task'>{task.value}</div>
            <div className='icons' key={task.id}>
            <MdDone onClick={()=>{completedTodo(task.id)}}></MdDone> 
            <MdDeleteForever onClick={()=>{removeToDo(task.id)}} ></MdDeleteForever>
            </div>
        </div>
        )
    })
  
}

export default ToDoItems