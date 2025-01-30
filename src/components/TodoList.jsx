

import { TodoCard } from './TodoCard';

export function TodoList(props) {
    const { todos, selectedTab } = props;


    const filteredTodos = selectedTab === "All" ? todos : 
            selectedTab === 'Completed' ? todos.filter(val => val.completed) :
            todos.filter(val => !val.completed);

    return (
        <>
            {filteredTodos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex} todo={todo} />
                )
            })
        }
        </>
    )
}