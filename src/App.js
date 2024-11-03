import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navabar';
import Textfield from './components/Textfield';
import Alert from './components/AAlert';
import About from './components/About';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2C3333';
      showAlert(" Dark mode has been enabled.", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled.", "Success")
    }
  }

  return (
    <>
      <BrowserRouter basename='/'>
        <Navbar title="TextIfy" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textfield showAlert={showAlert} heading="Enter Text to analyze!" mode={mode} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
