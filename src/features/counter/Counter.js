import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from 'react';

// Counter component: displays the counter value and provides buttons for incrementing, decrementing, and resetting the counter
const Counter = () => {
    // useSelector reads a value from the Redux store
    // Here, we select the 'count' from the 'counter' slice
    const count = useSelector((state) => state.counter.count);
    // useDispatch returns the dispatch function to send actions to the store
    const dispatch = useDispatch();

    // Local state to manage the increment amount input
    const [incrementAmount, setIncrementAmount] = useState(0);

    // Convert the increment amount to a number, defaulting to 0 if invalid
    const addValue = Number(incrementAmount) || 0;

    // Function to reset the increment amount and dispatch the reset action
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                {/* Button to increment the counter */}
                <button onClick={() => dispatch(increment())}>+</button>
                {/* Button to decrement the counter */}
                <button onClick={() => dispatch(decrement())}>-</button>
                {/* Input field to enter an amount to add to the counter */}
                <input 
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <div>
                    {/* Button to add the specified amount to the counter */}
                    <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                    {/* Button to reset the counter */}
                    <button onClick={resetAll}>Reset</button>
                </div>
            </div>
        </section>
    )
}

export default Counter
