import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'John Doe', email: 'john@example.com'},
    {id: '1', name: 'Jane Smith', email: 'jane@example.com'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
