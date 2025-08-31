// This file defines a Redux "slice" for the counter feature
// A slice contains the state, reducers (logic to update state), and actions
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the counter slice
// The state is an object with a single property: count
const initialState = {
    count: 0, // The counter starts at 0
};

// Create the slice
// - name: the key for this slice in the Redux store
// - initialState: the default state
// - reducers: functions to update the state
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Action: increment
        // Increases the counter by 1
        increment: (state) => {
            // Redux Toolkit uses Immer, so you can "mutate" state directly here
            state.count += 1;
        },
        // Action: decrement
        // Decreases the counter by 1
        decrement: (state) => {
            state.count -= 1;
        },
        // Action: reset
        // Resets the counter to 0
        reset: (state) => {
            state.count = 0;
        },
        // Action: incrementByAmount
        // Increases the counter by a specific value (from action.payload)
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

// Export the actions to be used in components
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// Export the reducer to be included in the store
export default counterSlice.reducer;