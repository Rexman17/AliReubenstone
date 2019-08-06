import React from 'react'
import { Icon } from 'semantic-ui-react'


const Footer = () => {

  return (
    <div>
      <footer>
        <span className="footer-icons">
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
      </footer>
    </div>
  )
}

export default Footer
