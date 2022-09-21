import React from "react";
import Todo from "../Todo";

function TodoList({todos, toggleTodoHandler, deleteTodoHandler}: {todos: Todo[], toggleTodoHandler: ToggleTodo, deleteTodoHandler: DeleteTodo}) {
    return (
        <ul id="todo-list" className="todo-list">
            { (todos as Todo[]).map((todo: Todo) => {
                return <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodoClick={toggleTodoHandler}
                    deleteTodoClick={deleteTodoHandler}
                />
            })}
        </ul>
    );
}

export default TodoList;