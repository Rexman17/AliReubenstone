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
              <p>React</p>
              <p>●</p>
              <p>Redux</p>
              <p>●</p>
              <p>Rails</p>
              <p>●</p>
              <p>Cloudinary API</p>
              <p>●</p>
              <p>JWT Auth</p>
              <p>●</p>
              <p>Materialize CSS</p>
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
            <div className="title">My Wish List</div>
            <div className="frameworks">
              <p>React</p>
              <p>●</p>
              <p>Rails</p>
              <p>●</p>
              <p>React Router</p>
              <p>●</p>
              <p>Google React Maps</p>
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
              <p>Rails</p>
              <p>●</p>
              <p>PostgreSQL</p>
              <p>●</p>
              <p>Recipe Puppy API</p>
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
