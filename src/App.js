import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import Terms from "./pages/Terms";
import Privacy from './pages/Privacy';
import Why from './pages/Why';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/franchise">
          <Franchise />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/why">
          <Why />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
