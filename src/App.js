import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Typing from 'react-typing-animation';
import ReactTypingEffect from 'react-typing-effect';


function App() {
  return (
    <div className="App">

    <ReactTypingEffect
      text={["Hello.", "Bobo"]}
      eraseDelay={300}
      speed={100}
    />


    </div>
  );
}

export default App;
