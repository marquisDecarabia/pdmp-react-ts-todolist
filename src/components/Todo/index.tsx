import React from "react";
import useTodo from "../../hooks/useTodo";

function Todo({todo, toggleTodoClick, deleteTodoClick}: {todo: Todo, toggleTodoClick: ToggleTodo, deleteTodoClick: DeleteTodo}) {
    return (
        <li className="todo stack-small">
            <input
                   type="checkbox"
                   className="todo-checkbox"
                   onClick={() => toggleTodoClick(todo?.id)}
                   defaultChecked={todo?.checked || undefined}
            />
            <label className="todo-text">
                <span>{ todo.name }</span>
            </label>
            <button className="todo-delete" onClick={() => deleteTodoClick(todo?.id)}>delete</button>
        </li>
    );
}

export default Todo;