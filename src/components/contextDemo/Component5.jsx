import React, { useContext } from "react";
import { UserContext } from "./Component1";


function Component5() {
    const user = useContext(UserContext);
    return (
        <>
            <h5>Component5</h5>
            <h6>{`Hello ${user.name} again!`}</h6>
        </>
    )
}

export default Component5;