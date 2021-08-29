import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Current from "./components/Current"
import Select from "./components/Select"
import About from "./components/About"
import Result from './components/Result'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* current bitcoin price */}
        <Route path='/current'>
          <Current/>
        </Route>
        {/* current bitcoin price */}
        <Route path='/' exact>
          <Current/>
        </Route>
        {/* select start date and end date */}
        <Route path='/history/select'>
          <Select/>
        </Route>
        {/* result of select page */}
        <Route path='/history/result'>
          <Result/>
        </Route>
        {/* personal info */}
        <Route path='/about'>
          <About/>
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
