import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo/>
    {/* <Todo/> */}
    </>
  )
}

export default App
