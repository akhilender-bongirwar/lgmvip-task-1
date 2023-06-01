import React, { useState } from 'react'

function ToDoForm(props) {
  const [input,setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  const handleClick = (e)=>{
    e.preventDefault();
    props.addTodo({
        id:Math.floor(Math.random*1000000),
        value:input,
        isDone:false,
    })
    setInput("");
  }

  return (
    <form>
        <input className='to-do-input' type='text' placeholder='Enter a to-do-item....' onChange={handleChange} value={input} />
        <button type='submit' className='submit-btn' onClick={handleClick} />
    </form>
  )
}

export default ToDoForm