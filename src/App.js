import React from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from '../src/components/NavBar.js'
import HomePage from '../src/components/containers/HomePage'
import SearchContainer from '../src/components/containers/SearchContainer'



function App() {
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component = {SearchContainer} />
    </Switch>
  </div>
  );
}

export default App;
