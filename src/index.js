// Entry point for the React app
// Sets up the Redux Provider to make the store available to all components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

// Create the root React node
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the app, wrapping it in <Provider> to give access to the Redux store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
