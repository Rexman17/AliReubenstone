import React from 'react';
import ProjectsList from '../components/ProjectsList'
import Blogs from '../components/Blogs'
// import { Button } from 'semantic-ui-react'

class ProjectsContainer extends React.Component {

  render() {
   return (
     <div className="container">

      <h2 id="projects-title">
        PROJECTS
      </h2>

  
        <ProjectsList />


      <div id="blogs">
        <h2 id="blogs-title">
          BLOGS
        </h2>
        <Blogs />
      </div>

    </div>

   )
 }
}

export default ProjectsContainer
