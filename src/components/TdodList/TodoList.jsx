import React from 'react';
import Todo from '../Todo/Todo';

function TodoList({todos,setTodos}) {
  return (
    <div>
        <ul className='flex flex-col items-center'>
          {todos.map((item)=>(
            <Todo key={item.id} setTodos={setTodos} todo={item}/>
          ))}
        </ul>
    </div>
  )
}

export default TodoList