import React from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
    <h1 className='heading'>TO DO LIST</h1>
    <div className='to-do-list-container'>
      <ToDoList />
    </div>
    </>
  )
}

export default App
