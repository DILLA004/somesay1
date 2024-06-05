import React, { useState } from 'react';
import Backendless from 'backendless';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');

    const registerUser = () => {
        const user = new Backendless.User();
        user.email = email;
        user.password = password;
        user.name = name;
        user.age = parseInt(age);
        user.gender = gender;
        user.country = country;

        Backendless.UserService.register(user)
            .then(registeredUser => {
                console.log('User registered: ', registeredUser);
                createUserFolder(registeredUser.objectId);
            })
            .catch(error => console.error('Error registering user: ', error));
    };

    const createUserFolder = (userId) => {
        const folderPath = `${userId}/shared_with_me`;
        Backendless.Files.createFolder(folderPath)
            .then(() => console.log('Folder created: ', folderPath))
            .catch(error => console.error('Error creating folder: ', error));
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default Register;
