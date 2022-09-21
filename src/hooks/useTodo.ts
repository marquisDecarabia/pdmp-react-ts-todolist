import {useEffect, useState} from "react";
import Todo from "../components/Todo";

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || "[]"))
    const [itemCountSpan, setItemCountSpan] = useState(0)
    const [uncheckedCountSpan, setUncheckedCountSpan] = useState(0)

    useEffect(() => {
        const updateCounters = () => {
            setItemCountSpan(todos.length)
            setUncheckedCountSpan(todos.filter((todoEl) => !todoEl?.checked).length)
        }
        updateCounters()
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo: AddTodo = () => {
        const name = prompt("Enter new task to do") || "Do something"
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
    return {todos, itemCountSpan, uncheckedCountSpan, addTodo, deleteTodo, toggleTodo}
}

export default useTodo