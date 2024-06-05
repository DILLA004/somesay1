import React, { useState } from 'react';
import Backendless from 'backendless';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        Backendless.UserService.login(email, password, true)
            .then(loggedInUser => console.log('User logged in: ', loggedInUser))
            .catch(error => console.error('Error logging in user: ', error));
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default Login;
