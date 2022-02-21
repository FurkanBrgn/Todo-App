import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function TodoList({todos,completeTodo,removeTodo,updateTodo}) {
  return todos.map((todo,index)=>(
            <div className={todo.isComplete ? "todo-row complete":"todo-row"} key={index}>
                <div key={todo.id} onClick={()=>completeTodo(todo.id)}>{todo.text}</div>
                <div className='icons'>
                    <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className="delete-icon"/>
                    <TiEdit onClick={()=>updateTodo(todo.id,todo.text)} className="edit-icon"/>
                </div>
            </div>
        ));
}

export default TodoList