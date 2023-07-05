import { useState } from "react"
import Form from "./components/Form/Form"
import TodoList from "./components/TdodList/TodoList"

function App() {

  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([])

  return (
    <>
    <h1 className="text-center text-4xl text-white font-bold">Todo List</h1>
    <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
