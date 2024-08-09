import React, { useState } from 'react';

// Demonstration of useState

function Car() {

    const [car, setCar] = useState({
        brand: 'Benz',
        model: 'E350',
        year: 2021,
        color: 'black',
      });
    
    const updateColor = (color) => {
      setCar(prevState => {
        return {
          ...prevState,
          color: color,
        };
      });
    }
  
    return (
      <>
        <h1>My car is {car.brand} {car.model} {car.color} {car.year}</h1>
        <button onClick={(e) => updateColor(e.target.innerHTML)}>Blue</button>
        <button onClick={(e) => updateColor(e.target.innerHTML)}>Orange</button>
        <button onClick={(e) => updateColor(e.target.innerHTML)}>Green</button>
        <button onClick={(e) => updateColor(e.target.innerHTML)}>Red</button>
      </>
    );
  }

  export default Car;
  