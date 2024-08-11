import React, {useCallback, useState } from "react";
import Todos from "./Todos";

const CacheTodo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const addTodo = useCallback(() => {
        setTodos((todos) => [...todos, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo}/>
            <hr/>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default CacheTodo;