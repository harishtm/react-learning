import React from 'react';
import { FootBall } from '../src/components/FootBall.jsx';
import MyTimer from '../src/components/MyTimer.jsx';
import Car from './components/Car.jsx';
import DisplayCar from './components/DisplayCar.jsx';
import Component1 from './components/contextDemo/Component1.jsx';
import MyRef from './components/refDemo/ref1.jsx'
import Todos from './components/reducerDemo/Todos.jsx';
import CacheTodo from './components/callbackDemo/main.jsx';


function App() {

  const myArray = [1, 2, 3, 4, 5];

  return (
    <>
      {
        myArray.map((item, index) => {
          return (
            <div key={index}>
              Square of {item} is {item ** 2}
            </div>
          );
        })
      }
      <hr/>
      <FootBall isGoal={true}/>
      <hr/>
      <DisplayCar/>
      <hr/>
      <Car/>
      <hr/>
      <MyTimer/>
      <hr/>
      <Component1/>
      <hr/>
      <MyRef/>
      <hr/>
      <Todos/>
      <hr/>
      <CacheTodo/>
    </>
  );
}


export default App;
