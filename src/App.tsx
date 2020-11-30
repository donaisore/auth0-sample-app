import React from 'react'
import logo from './logo.svg'
import './App.css'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foo">Foo</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/foo">
          <Foo />
        </Route>
        <Route exact path="/bar">
          <Bar />
        </Route>
      </Switch>
    </Router>
  )
}

const Home: React.FC = () => {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const Foo: React.FC = () => {
  return <div>Fooページ</div>
}

const Bar: React.FC = () => {
  return <div>Barページ</div>
}

export default App
