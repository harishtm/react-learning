import React, { useCallback } from "react";


const Todos = (props) => {

    console.log("child render");

    return (
        <>
            <h2>Todos</h2>
            {
                props.todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={props.addTodo}>Add Todo</button>
        </>
    )
}

export default React.memo(Todos);