import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './authSlice';

import { addUser } from './usersSlice';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  const currentUser = useSelector(state => state.auth.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to usersSlice for author dropdown
    dispatch(addUser({ username, firstName, lastName }));
    // Add to authSlice for authentication
    dispatch(register({ username, password, firstName, lastName }));
  };

  if (currentUser) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label>First Name: </label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name: </label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Username: </label>
        <input value={username} onChange={e => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      {error && <div style={{color:'red'}}>{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
