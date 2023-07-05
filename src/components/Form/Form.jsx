import React, { useState } from 'react'

function Form({inputText,setInputText,todos,setTodos}) {
    const [editing,setEditing]=useState(false)
    const todoChange=(e)=>{
        const trimValue=e.target.value.trim()
        setInputText(trimValue)
        
    }

    const submitHandeler=(e)=>{
        e.preventDefault()

        if(inputText!==""){
            setTodos([
                ...todos,
                {text:inputText,complated:false,id:Date.now()}
            ])

        }


        setInputText("")
    }

  return (
    <form className='max-w-[1200px] mx-auto flex items-center justify-center py-8'>
        <input type="text" value={inputText} className='w-[300px] h-[30px] rounded-lg' onChange={todoChange} />
        <button onClick={submitHandeler} type='submit' className='bg-orange-500 p-1 text-white font-bold text-xl rounded-lg px-2 ml-4'>
        <i class="fa-regular fa-plus"></i>
        </button>
    </form>
  )
}

export default Form