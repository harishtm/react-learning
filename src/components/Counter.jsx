import React from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../redux/actions/counterAction";


const Counter = ({ count, incrementCount, decrementCount }) => {
    return (
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = {
    incrementCount,
    decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);