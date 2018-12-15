import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router'
import Home from './components/Home'
import ShowsContainer from './components/shows/ShowsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={(routerProps) => <Home history={routerProps.history} /> }/>
          <Route exact path='/shows' render={(routerProps) => <ShowsContainer history={routerProps.history} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
