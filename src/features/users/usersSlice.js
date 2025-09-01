import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'John Doe', email: 'john@example.com'},
    {id: '1', name: 'Jane Smith', email: 'jane@example.com'}
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ username, firstName, lastName }) {
                return {
                    payload: {
                        id: Date.now().toString(),
                        name: `${firstName} ${lastName}`,
                        username,
                    }
                };
            }
        }
    }
});

export const { addUser } = usersSlice.actions;
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
