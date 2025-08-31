# Simple Project Setup & Commands

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Run tests:**
   ```bash
   npm test
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

---

# Project Structure & Detailed Explanation

## Overview
This app is a simple React + Redux counter example. It demonstrates how to use Redux for state management in a React application.

## File/Folder Structure

```
react_redux_1/
├── package.json           # Project dependencies and scripts
├── public/                # Static files (index.html, icons, etc.)
├── src/                   # Source code
│   ├── App.js             # Main React component
│   ├── App.css            # App styling
│   ├── index.js           # Entry point, sets up Redux provider
│   ├── index.css          # Global styles
│   ├── app/
│   │   └── store.js       # Redux store configuration
│   └── features/
│       └── counter/
│           ├── Counter.js         # Counter UI component
│           └── counterSlice.js    # Redux slice for counter state
└── README.md              # Project documentation
```

## Detailed File Explanations

### `src/app/store.js`
Configures the Redux store and combines all slices.

### `src/features/counter/counterSlice.js`
Defines the counter state, actions, and reducer using Redux Toolkit's `createSlice`.

### `src/features/counter/Counter.js`
A React component that displays the counter value and buttons to increment/decrement it. Uses `useSelector` to read state and `useDispatch` to send actions.

### `src/App.js`
Main app component. Renders the `Counter` component.

### `src/index.js`
Entry point. Wraps the app in `<Provider>` to give Redux store access to all components.

---

# Redux & State Flow

- **State**: The counter value is stored in Redux state (in `counterSlice`).
- **Actions**: User clicks a button → dispatches an action (e.g., `increment`).
- **Reducer**: The reducer in `counterSlice` updates the state.
- **Selector**: Components use `useSelector` to read the current state.
- **Dispatch**: Components use `useDispatch` to send actions to the store.

---

# How It Works (Step-by-Step)

1. **App starts**: `index.js` renders `<App />` inside `<Provider store={store}>`.
2. **Store setup**: `store.js` creates the Redux store with the counter slice.
3. **Counter UI**: `Counter.js` uses `useSelector` to get the counter value and `useDispatch` to send increment/decrement actions.
4. **State update**: When a button is clicked, an action is dispatched. The reducer in `counterSlice.js` updates the state.
5. **UI re-renders**: The new state is passed to the component, updating the displayed value.

---

# See code comments in each file for detailed explanations.
