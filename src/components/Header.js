import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import '../App.css';


const Header = () => {
  return (
    <div id="header">
      <h1 id="myName">
        ALI REUBENSTONE
      </h1>
      <div id="ReactTypingEffect">
        <ReactTypingEffect
          text={["Full Stack Software Developer", "Former Actor", "Finance Grad", "Emory Alum", "Improv Lover"]}
          eraseDelay={200}
          speed={100}
        />
      </div>
      <h4 id="resume">
        <a href="https://drive.google.com/file/d/1gDm3SgYmzSwBVx8oMKHOHb0bHmZWYBuV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </h4>
    </div>
  )
}

export default Header
