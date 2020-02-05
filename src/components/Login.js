import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = props => {
  const [inputs, handleChange] = useState({ username: '', password: '' });
  
  useEffect(() => {
    console.log('hit');
    axios
      .get('/auth/check')
      .then(res => props.history.push('/posts'))
      .catch(err => console.log(err.response));
  }, []);

  function login() {
    axios
      .post('/auth/login', inputs)
      .then(res => props.history.push('/posts'))
      .catch(err => alert(err.response.data));
  }
  return (
    <div>
      <input
        value={inputs.username}
        placeholder="username"
        onChange={e => handleChange({ ...inputs, username: e.target.value })}
      />
      <input
        value={inputs.password}
        placeholder="password"
        onChange={e => handleChange({ ...inputs, password: e.target.value })}
      />
      <button onClick={() => login(inputs)}>submit</button>
    </div>
  );
};

export default Login;
