import React, { useState } from 'react'

function ToDoForm(props) {
  const [input,setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
  }
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(props);
    props.addToDo({
        id:Math.floor(Math.random()*100000),
        value:input,
        isDone:false,
    })
    setInput("");
  }

  return (
    <form className='form'>
        <input className='to-do-input' type='text' placeholder='Enter a to-do-item....' onChange={handleChange} value={input} />
        <button type='submit' className='submit-btn' onClick={handleClick} >Submit</button>
    </form>
  )
}

export default ToDoForm