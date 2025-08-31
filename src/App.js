// Main App component
// Renders the Counter component inside a styled container
import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <main>
      {/* Render the Counter component (Redux-powered) */}
      <Counter />
    </main>
  );
}

export default App;
