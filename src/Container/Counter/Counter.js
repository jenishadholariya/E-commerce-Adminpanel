import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { DecrementAction, IncrementAction } from '../../Redux/Action/Counter.action';

function Counter(props) {

    const dispatch = useDispatch();

    const c=useSelector(state=>state.counter)

    const handleIncrement = () => {
        dispatch(IncrementAction()) 
    }

    const handleDecrement = () => {
        dispatch(DecrementAction())
    }

    return (
        <div>
            <button onClick={() =>handleIncrement()}>+</button>
            <p>{c.count}</p>            
            <button onClick={() =>handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;