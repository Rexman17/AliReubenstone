import React from 'react'
// import data from '../db.json'


class ProjectsList extends React.Component {

  render () {
    return (
      <div>
        <div className="project-container">
          <span className="project-header">
            <div className="title">Packing Pal</div>
            <div className="frameworks">
              <span>React & React Router</span>
              <span className="bullet">●</span>
              <span>Redux</span>
              <span className="bullet">●</span>
              <span>Rails</span>
              <span className="bullet">●</span>
              <span>Cloudinary API</span>
              <span className="bullet">●</span>
              <span>JWT Auth</span>
              <span className="bullet">●</span>
              <span>Materialize CSS</span>
            </div>
          </span>
          <p className="description">
            The easiest way to keep track of all of your personal items during the moving process.
          </p>
          <div className="links">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/13ej9B7GjmY">
                DEMO
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rexman17/moving_app_frontend">
                REPO
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <span className="project-header">
            <div className="title">Nutritionist Website</div>
            <div className="frameworks">
              <span>React</span>
              <span className="bullet">●</span>
              <span>React Router</span>
              <span className="bullet">●</span>
              <span>Custom CSS</span>
              <span className="bullet">●</span>
              <span>Media Queries</span>
            </div>
          </span>
          <p className="description">
            Template for a nutritionist's website, created to get more practice with React, React Router, Custom CSS and Media Queries.
          </p>
          <div className="links">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/V-W0GQfbjXI">
                DEMO
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rexman17/Nutritionist-Website">
                REPO
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <span className="project-header">
            <div className="title">My Wish List</div>
            <div className="frameworks">
              <span>React</span>
              <span className="bullet">●</span>
              <span>Rails</span>
              <span className="bullet">●</span>
              <span>React Router</span>
              <span className="bullet">●</span>
              <span>Google React Maps</span>
            </div>
          </span>
          <p className="description">
            A personalized wish list, complete with item pricing and store locations.
          </p>
          <div className="links">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=2dtJhSK0s0o&feature=youtu.be">
                DEMO
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Rexman17/Wish-List-React">
                REPO
              </a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <span className="project-header">
            <div className="title">Chipotluck</div>
            <div className="frameworks">
              <span>Rails</span>
              <span className="bullet">●</span>
              <span>PostgreSQL</span>
              <span className="bullet">●</span>
              <span>Recipe Puppy API</span>
            </div>
          </span>
          <p className="description">
            The best way to create or attend local potlucks and find recipes for your dishes.
          </p>
          <div className="links">
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/Phvk9ld_U5I">DEMO</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Veraprot/Potluck">REPO</a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProjectsList
