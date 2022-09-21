import React, {useEffect, useState} from 'react';
import TodoList from "../../components/TodoList";
import Todo from "../../components/Todo";

function Home() {
    const handleSubmit: HandleSubmit = (e) => {
        e.preventDefault()
        addTodo()
    }
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || "[]"))

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo: AddTodo = () => {
        const name = prompt("Enter new task to do") || "Do something";
        const todo: Todo = {
            id: Date.now(),
            name,
            checked: false,
        };
        setTodos([...todos, todo])
    }

    const deleteTodo: DeleteTodo = (id) => {
        setTodos(todos.filter(todo => id !== todo?.id));
    }
    const toggleTodo: ToggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.checked = !todo.checked
            }
            return todo
        }));
    }
    return (
        <div className="container center">
            <h1 className="center title">My TODO App (but in React + TS)</h1>
            <div className="flow-right controls">
                <span>Item count: <span id="item-count">{ todos.length }</span></span>
                <span>Unchecked count: <span id="unchecked-count">{ todos.filter((todoEl) => !todoEl?.checked).length }</span></span>
            </div>
            <form className="center" onSubmit={handleSubmit}>
                <button type="submit" className="button center" onClick={() => addTodo}>New TODO</button>
            </form>
            <TodoList toggleTodoHandler={toggleTodo} deleteTodoHandler={deleteTodo} todos={todos} />
        </div>
    )
}

export default Home;
