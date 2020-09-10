import React from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';


function App() {
  return (
    // BEM
  <Router>
  <div className="App">
  <Header /> 

    <Switch>
      <Route path = "/checkout">
        <Checkout />
      </Route>
      {/*  o route para o default sempre no final*/}
      <Route path = "/">
        <Home />
      </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
