import React from "react";
import useTodo from "../../hooks/useTodo";

function Todo({todo}: {todo: Todo}) {
    const {deleteTodo, toggleTodo} = useTodo()
    return (
        <li className="todo stack-small">
            <input
                   type="checkbox"
                   className="todo-checkbox"
                   onClick={() => toggleTodo(todo?.id)}
                   defaultChecked={todo?.checked || undefined}
            />
            <label className="todo-text">
                <span>{ todo.name }</span>
            </label>
            <button className="todo-delete" onClick={() => deleteTodo(todo?.id)}>delete</button>
        </li>
    );
}

export default Todo;