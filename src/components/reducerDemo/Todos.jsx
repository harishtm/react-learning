import { useReducer } from "react";

const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: true,
    },
];

const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => {
                            dispatch({ type: "COMPLETE", payload: todo });
                        }}
                    />
                    {todo.title}
                </div>
            ))}
        </div>
    );
}

export default Todos;