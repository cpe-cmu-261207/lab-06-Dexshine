import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from "./components/Current"
import Select from "./components/Select"
import About from "./components/About"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/current'>
          <Current/>
        </Route>
        <Route path='/' exact>
          <Current/>
        </Route>
        <Route path='/history/select'>
          <Select/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Switch>


    </Router>
  );
}

export default App;
