import Backendless from 'backendless';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

Backendless.initApp('62034422-A0B6-431E-81D6-5943545DBACC',
    '399B33BD-9392-4169-A7B0-B788D102C960');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
