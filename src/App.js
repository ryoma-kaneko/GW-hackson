import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/public/Main';
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
