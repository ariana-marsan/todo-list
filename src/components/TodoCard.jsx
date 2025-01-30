
export function TodoCard(props) {
    const { todo } = props;
    
    return (
        <div className="todo-card">
            <div className="todo-card-input">
                {todo.input}
            </div>
            <div className="todo-card-buttons">
                <button className="button-done" disabled={todo.completed}>Done</button>
                <button className="button-delete">Delete</button>
            </div>
        </div>
    )
}