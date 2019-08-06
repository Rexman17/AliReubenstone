import React from 'react';
import ProjectsList from '../components/ProjectsList'
import Blogs from '../components/Blogs'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
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

      <div id="skills">
        <h2 id="skills-title">
          SKILLS
        </h2>

        <Skills />

      </div>

      <Footer />

    </div>

   )
 }
}

export default ProjectsContainer
