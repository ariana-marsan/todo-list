import { useState } from "react";

export function TodoInput(props) {
    const { handleAddTodo } = props;
    const [input, setInput] = useState("");

    return (
        <div className="inputContainer">
            <input value={input} placeholder="Add a new task" onChange={(e)=> {setInput(e.target.value)}}></input>
            <button onClick={()=> {
                if(!input) return;
                handleAddTodo(input);
                setInput("");
            } }>
              <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}