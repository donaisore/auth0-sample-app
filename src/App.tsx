import React from 'react';
import Home from 'pages/home/Home';

import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {ToDoList} from 'pages/ToDo/ToDoList';

function App() {
  return (
    <Router>
      <Link to="/todos">ToDoList</Link>
      <Switch>
        <Route path="/todos" exact>
          <ToDoList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
