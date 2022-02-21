import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Dashboard() {
    const [todos,setTodos]=useState([]);
    const [edit,setEdit]=useState({
        id:null,
        value:"",
        isComplete:false
    });
    const addTodo=(newTodo)=>{
        if(!newTodo.text){
            return;
        }
        setTodos([newTodo,...todos]);
    }
    const completeTodo=(todoId)=>{
        const updatedTodos=todos.map(todo=>{
            if(todo.id===todoId){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    const removeTodo=(todoId)=>{
        const removeArr=todos.filter(todo=>todo.id !==todoId);
        setTodos(removeArr);
    }
    const updateTodo=(todoId,text)=>{
        setEdit({id:todoId,value:text,isComplete:false})
    }
    const submitUpdate= value=>{
        editTodo(edit.id,value);
        setEdit({
            id:null,
            value:"",
            isComplete:false
        });
    }
    const editTodo=(todoId,value)=>{
        if(!value.text){
            return;
        }
        setTodos(prevTodos=>prevTodos.map(item=> item.id===todoId ? value : item));
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return (
        <div>
            <TodoForm onSubmit={addTodo}/>
            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default Dashboard