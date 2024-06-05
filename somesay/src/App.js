import React from 'react';
import Register from './components/Register';
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";

function App() {
  return (
      <div className="App">
        <Register />
        <Login />
          <FileUpload />
      </div>
  );
}

export default App;

