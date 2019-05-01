import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import logo from './logo.svg'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import MovieDetail from './components/MovieDetail'


class App extends Component {
  constructor() {
    super()
    this.state = {
      budget: 10.00
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div id="link-header">
            <Link to='/'>Home</Link>
            <Link to='/catalog'>Catalog</Link>
            <div id="logo">
              <Link to='/'>REFLIX</Link>
            </div>
          </div>

          <Route exact path='/' render={() => <Landing />}/>
          <Route exact path='/catalog' render={() => <Catalog budget={this.state.budget}/>}/>
          <Route exact path='/movies/:id' render={( {match} ) => <MovieDetail match={match}/>}/>
        </div>
      </Router>
    )
  }
}

export default App