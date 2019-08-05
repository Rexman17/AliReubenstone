import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Icon } from 'semantic-ui-react'
// import { BrowserRouter as Link } from "react-router-dom";


class Header extends React.Component {

  render () {
    return (
      <div className="header">
        <h1 id="my-name">
          ALI REUBENSTONE
        </h1>
        <div id="react-typing-effect">
          <ReactTypingEffect
            text={["Full Stack Web Developer", "Former Actor", "Finance Grad", "Emory Alum", "Improv Lover"]}
            eraseDelay={100}
            speed={100}
          />
        </div>
          <h4 id="resume">
            <a class="icon" href="https://drive.google.com/file/d/1gDm3SgYmzSwBVx8oMKHOHb0bHmZWYBuV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              View My Resume
            </a>
          </h4>
          <span className="social-icons">
            <a href="https://www.linkedin.com/in/alireubenstone/" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size='big' aria-hidden="true" />
            </a>
            <a href="https://github.com/Rexman17" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size='big' aria-hidden="true" />
            </a>
            <a href="https://medium.com/@alireubenstone" target="_blank" rel="noopener noreferrer">
              <Icon name="medium" size='big' aria-hidden="true" />
            </a>
          </span>
          <div id="down-arrow">
            <div id="arrow-btn">
              <Icon name="arrow circle down" size="big"/>
            </div>
          </div>
        </div>
    )
  }

}

export default Header
