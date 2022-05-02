import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice"

function CreateTodo() {
  
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  
  function handleChange(e) {
    setTodo(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(todoAdded(todo))
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <p>
        <label>add todo</label>
        <input type="text" value={todo} onChange={handleChange} />
      </p>
      <input type="submit" />
    </form>
  </div>;
}

export default CreateTodo;
