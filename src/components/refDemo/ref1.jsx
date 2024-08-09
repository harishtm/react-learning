import React, { useEffect, useRef, useState} from "react";


function MyRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Render Count {count.current}</h2>
        </>
    )
}

export default MyRef;