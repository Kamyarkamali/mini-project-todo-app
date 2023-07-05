import React, { useState } from 'react'

function Todo({setTodos,todo}) {
    const [isActive, setIsActive] = useState(true);
    const [edites,setEdites]=useState(false)
    const deletHandeler=()=>{
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    }

    const toggleActive=()=>{
        setIsActive((prev)=>!prev)
    }

  return (
    <div>
        <ul className='flex justify-center bg-white rounded-lg mt-4 p-3 items-center text-gray-700 font-bold w-[400px]'>
            <li>{todo.text}</li>
            <div className='flex justify-end w-[300px] gap-4'>
            <button onClick={deletHandeler} className='bg-red-500 p-2 rounded-lg'>
            <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
            <button onClick={toggleActive} className={`p-2 rounded-lg ${isActive ? "bg-green-500":"bg-green-200"}`}>
            <i class="fa-solid fa-check"></i>
            </button>
            <button>Edite</button>
            </div>
        </ul>
    </div>
  )
}

export default Todo