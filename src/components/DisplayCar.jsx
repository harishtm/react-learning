function Car(props) {
    return <p>I have a car with brand {props.brand}</p>
  }
  
  function DisplayCar() {
    const cars = [
      {
        id: 1,
        brand: 'Benz',
      },
      {
        id: 2,
        brand: 'Toyota',
      },
      {
        id: 3,
        brand: 'Honda',
      },
    ];
  
    return (
      <>
        {
        cars.map((car) => <Car key={car.id} brand={car.brand}/>)
      }
      </>
    )
  }

  export default DisplayCar;
  