import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HR4ifEWdJUDnXtIbD00ErdoaXCbsQVaktyvuHK7GHjLYbnCr18IAwm8bYR09Bsf9Z7qKjbuvd0jvNgZUGCwz4Vh00mwoRjA8i");

function App() {
  const [ {basket} , dispatch ] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is  >> ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
  <Router>
  <div className="App">
    

    <Switch>
      <Route path = "/login">
        <Login />
        
      </Route>
      <Route path = "/checkout">
        <Header /> 
        <Checkout />
      </Route>
      <Route path = "/payment">
        <Header /> 
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        
      </Route>
      {/*  o route para o default sempre no final*/}
      <Route path = "/">
        <Header /> 
        <Home />
      </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
