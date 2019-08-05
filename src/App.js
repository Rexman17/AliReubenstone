import React from 'react';
import './App.css';
import Header from './components/Header'
import ProjectsContainer from './containers/ProjectsContainer'
// import { HashRouter } from 'react-router-dom'


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Header />
        <ProjectsContainer />
      </div>
    )
  }

}

export default App;
