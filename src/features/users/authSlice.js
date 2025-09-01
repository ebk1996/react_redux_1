 import { createSlice } from '@reduxjs/toolkit';

// Initial state: users array and currentUser
const initialState = {
  users: [], // { username, password }
  currentUser: null, // { username }
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, password, firstName, lastName, addUserToUsersSlice } = action.payload;
      // Check if username exists
      const exists = state.users.some(u => u.username === username);
      if (exists) {
        state.error = 'Username already exists.';
      } else {
        // Add to local auth state
        state.users.push({ username, password, firstName, lastName });
        state.currentUser = { username, firstName, lastName };
        state.error = null;
        // Add to usersSlice (global users list for author dropdown)
        if (typeof addUserToUsersSlice === 'function') {
          addUserToUsersSlice({ username, firstName, lastName });
        }
      }
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(u => u.username === username && u.password === password);
      if (user) {
        state.currentUser = { username, firstName: user.firstName, lastName: user.lastName };
        state.error = null;
      } else {
        state.error = 'Invalid username or password.';
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;