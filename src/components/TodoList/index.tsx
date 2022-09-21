import React from "react";
import Todo from "../Todo";

function TodoList({todos}: {todos: Todo[]}) {
    return (
        <ul id="todo-list" className="todo-list">
            { (todos as Todo[]).map((todo: Todo) => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </ul>
    );
}

export default TodoList;