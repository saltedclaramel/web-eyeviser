import './App.css';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './routes.js';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: "example of data"
    }
  }

  render() {
    return (    
      <Fragment>
        <div className="App" id="app">
            <Routes/>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
