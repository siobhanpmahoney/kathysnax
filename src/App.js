import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/about'
import ShowsContainer from './components/shows/ShowsContainer'
import MusicContainer from './components/music/MusicContainer'
import MerchContainer from './components/merch/MerchContainer'
import Contact from './components/contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' render={(routerProps) => <Home history={routerProps.history} /> }/>
          <Route exact path='/about' render={(routerProps) => <About history={routerProps.history} /> }/>
          <Route exact path='/shows' render={(routerProps) => <ShowsContainer history={routerProps.history} /> }/>
          <Route exact path='/listen' render={(routerProps) => <MusicContainer history={routerProps.history} /> }/>
          <Route exact path='/merch' render={(routerProps) => <MerchContainer history={routerProps.history} /> }/>
          <Route exact path='/contact' render={(routerProps) => <Contact history={routerProps.history} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
