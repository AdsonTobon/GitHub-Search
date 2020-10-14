import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeSearch from './components/HomeSearch';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignUp} />
        <Route exact path='/Home' component={HomeSearch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
