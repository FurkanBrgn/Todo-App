import React, { useState,useEffect,useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus()
  });
  const handleSubmit = e=> {
    e.preventDefault();
    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input,
        isComplete:false
    });
    setInput("")
  }

  const handleChange = e=> {
    setInput(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      { props.edit ? (
          <>
          <input
                type="text"
                name="text"
                placeholder="Update your todo..."
                value={input}
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            ></input>
            <button type="submit" className="todo-button edit">Update</button>
            </>
        )
      : (
          <>
          <input
                type="text"
                name="text"
                placeholder="Add a new todo..."
                value={input}
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                ></input>
                <button type="submit" className="todo-button">Add todo</button>
                </>
        )
        }
    </form>
  );
}

export default TodoForm;
