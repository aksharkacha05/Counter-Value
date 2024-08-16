import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,aksharcounter]=useState(0)

  const addvalue=()=>{
      aksharcounter(counter+1)
  }
  const removevalue= ()=>{
    if (counter>=0) {
      aksharcounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter Value</h1>  
      <h2>Counter Value {counter} </h2>
      <button 
      onClick={addvalue}>Add Value</button>
      <br />
      <button
      onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
