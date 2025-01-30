import { useState } from "react";

export function TodoInput(props) {
    const { handleAddTodo } = props;
    const [input, setInput] = useState("");

    return (
        <div >
            <form className="inputContainer">
            <input value={input} placeholder="Add a new task" onChange={(e)=> {setInput(e.target.value)}} onClick={()=> {
                if(!input) return;
                handleAddTodo(input);
                setInput("")}}></input>
            <button onClick={()=> {
                if(!input) return;
                handleAddTodo(input);
                setInput("");
            } }>
              <i className="fa-solid fa-plus"></i>
            </button>
            </form>
        </div>
    )
}