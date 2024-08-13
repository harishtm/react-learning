import React from "react";
import useFetch from "./utils";

const FetchTodos = () => {
    // const [data, setData] = useState(null);

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return(
        <>
            { 
                data &&
                data.map((item) => {
                    return (
                        <ul>
                            <li key={item.id}>{item.title}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default FetchTodos;
