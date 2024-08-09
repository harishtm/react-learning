function MadeGoal() {
    return <h1>Goal!</h1>;
  }
  
  function MissedGoal() {
    return <h1>No Goal!</h1>;
  }
  
  function FootBallDefault(props) {
      const isGoal = props.isGoal;
    // if (isGoal) {
    //   return <MadeGoal />;
    // }
    // return <MissedGoal />;
    return isGoal ? <MadeGoal /> : <MissedGoal />;
  }

  export const FootBall = (props) => {
    const isGoal = props.isGoal;
    return isGoal ? <MadeGoal /> : <MissedGoal />;
    // this has to be imported with {} in App.js
  }

  
  // this has to be imported without {} in App.js
  export default FootBallDefault;