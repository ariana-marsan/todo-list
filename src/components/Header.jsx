

export function Header(todos) {

    const isJustOne = todos.todos.length === 1 ? "task" : "tasks"
    

    return (
        <header>
            <h1 className="howManyTasks">You have {todos.todos.length} {isJustOne}</h1>
        </header>
    )
}