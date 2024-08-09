import React, { useState, useEffect } from 'react';

// Demonstation of useEffect

function MyTimer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
        setCount(count => count + 1);
      }, 200)
      return () => {
        clearTimeout(timer);
      }
    }, []); // empty array means this effect will run only once

    // if empty array is not provided, then this effect will run every time the component is rendered
  
    return <h1>I've rendered {count} times!</h1>;
  
  }

  export default MyTimer;