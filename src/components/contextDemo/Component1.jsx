import React, { createContext, useState } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState({ name: "John", age: 25 });

    const handleUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <UserContext.Provider value={user}>
            <input
                type="text"
                value={user.name}
                name="name"
                onChange={(e) => handleUserChange(e)} />
            <input
                type="number"
                value={user.age}
                name="age"
                onChange={(e) => setUser({ ...user, age: e.target.value })} />
            <p>
                In Component1 prop drilling {`Hello ${user.name}!`}
            </p>
            <Component2/>
        </UserContext.Provider>
    )
}

export default Component1;
