import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import '../App.css';

const Header = () => {
  return (
    <div>
      <h1 id="myName">
        ALI REUBENSTONE
      </h1>
      <h4 id="headerSpan">

      </h4>
      <div id="ReactTypingEffect">
        <ReactTypingEffect
          text={["Full Stack Software Developer", "Former Actor", "Finance Grad", "Emory Alum", "Improv Lover"]}
          eraseDelay={200}
          speed={100}
        />
      </div>
    </div>
  )
}

export default Header
