import React from 'react';
// import ProjectsList from '../components/ProjectsList'
// import { Button } from 'semantic-ui-react'

class ProjectsContainer extends React.Component {

  render() {
   return (
     <div className="container">

      <h2 id="projects-title">
        PROJECTS
      </h2>

      <div className="projects">
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
            lsdjfkdjflsjflksjl
          </p>
          <div className="links">
            <div color='red'>DEMO</div>
            <div color='red'>REPO</div>
          </div>
        </div>

        <div className="project-container">
          <span className="project-header">
            <div className="title">TITLE</div>
            <div className="frameworks">
              <p>Node.js</p>
              <p>●</p>
            </div>
          </span>
          <p className="description">
            lsdjfkdjflsjflksjl
          </p>
          <div className="links">
            <div color='red'>DEMO</div>
            <div color='red'>REPO</div>
          </div>
        </div>

        <div className="project-container">
          <span className="project-header">
            <div className="title">TITLE</div>
            <div className="frameworks">
              <p>Node.js</p>
              <p>●</p>
            </div>
          </span>
          <p className="description">
            lsdjfkdjflsjflksjl
          </p>
          <div className="links">
            <div color='red'>DEMO</div>
            <div color='red'>REPO</div>
          </div>
        </div>
      </div>

    </div>
   )
 }
}

export default ProjectsContainer
