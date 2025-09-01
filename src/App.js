// Main App component
// Renders the Counter component inside a styled container
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Register from './features/users/Register';
import Login from './features/users/Login';
import { logout } from './features/users/authSlice';
// import './App.css';
// import Counter from './features/counter/Counter';
//import posts
import PostsLists from './features/posts/PostsLists';
//import AddPostsForm
import AddPostForm from './features/posts/AddPostForm';


function App() {
  const currentUser = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  return (
    <main>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
        <div>
          {currentUser ? (
            <>
              <span>Logged in as: <b>{currentUser.username}</b></span>
              <button style={{marginLeft:10}} onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <>
              <Register />
              <Login />
            </>
          )}
        </div>
      </header>
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
