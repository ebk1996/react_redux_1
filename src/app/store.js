// Redux store configuration file
// This sets up the global Redux store for the app, combining all reducers (slices)
import { configureStore } from '@reduxjs/toolkit';
// Import the reducer for the counter slice
import counterReducer from '../features/counter/counterSlice';
// Import Posts
import postReducer from "../features/posts/postsSlice";
//Import Users
import usersReducer from "../features/users/usersSlice";
// Create the Redux store
// The 'counter' key will be available in the global state as state.counter
export const store = configureStore({
  reducer: {
    // counter: counterReducer, // Attach the counter slice reducer
    posts: postReducer,
    users: usersReducer
  },
});
// Now, any component can access state.counter and dispatch actions to it