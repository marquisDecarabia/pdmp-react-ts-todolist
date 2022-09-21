import React from 'react';
import TodoList from "../../components/TodoList";
import useTodo from "../../hooks/useTodo";

function Home() {
    const {todos, itemCountSpan, uncheckedCountSpan, addTodo} = useTodo()
    const handleSubmit: HandleSubmit = (e) => {
        e.preventDefault()
        addTodo()
    }

    return (
        <div className="container center">
            <h1 className="center title">My TODO App (but in React + TS)</h1>
            <div className="flow-right controls">
                <span>Item count: <span id="item-count">{ itemCountSpan }</span></span>
                <span>Unchecked count: <span id="unchecked-count">{ uncheckedCountSpan }</span></span>
            </div>
            <form className="center" onSubmit={handleSubmit}>
                <button type="submit" className="button center" onClick={() => addTodo}>New TODO</button>
            </form>
            <TodoList todos={todos} />
        </div>
    )
}

export default Home;
