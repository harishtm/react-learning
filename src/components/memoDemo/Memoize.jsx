import React, { useState, useMemo } from 'react';

const FactorialCalculator = (props) => {
    console.log(props)
    const number = props.number;
    const factorial = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }, [number]);

    return <div>Factorial of {number} is {factorial}</div>;
}

function CalculateFactorial() {

    const [number, setNumber] = useState(1);
    return (
        <>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <FactorialCalculator number={number}/>
        </>
    )
}

export default CalculateFactorial;
