
export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompletedTodo } = props;
    
    return (
        <div className="todo-card">
            <div className="todo-card-input">
                {todo.input}
            </div>
            <div className="todo-card-buttons">
                <button className="button-done" disabled={todo.completed} onClick={()=> {handleCompletedTodo(todoIndex)}}>Done</button>
                <button onClick={() =>{handleDeleteTodo(todoIndex)}}  className="button-delete">Delete</button>
            </div>
        </div>
    )
}