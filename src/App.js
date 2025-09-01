// Main App component
// Renders the Counter component inside a styled container
import React from 'react';
// import './App.css';
// import Counter from './features/counter/Counter';
//import posts
import PostsLists from './features/posts/PostsLists';
//import AddPostsForm
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main>
      {/* Render the Counter component (Redux-powered) */}
      {/* <Counter /> */}
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
