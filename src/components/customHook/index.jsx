import React from "react";
import { slice } from "lodash";
import useFetch from "./utils";

const FetchTodos = () => {
    // const [data, setData] = useState(null);

    let [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    data = slice(data, 0, 5)

    return(
        <>
            { 
                data &&
                data.map((item) => {
                    return (
                        <ul key={item.id}>
                            <li key={item.id}>{item.title}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default FetchTodos;
