import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.cmp';
import HomePage from './pages/homepage/homepage.cmp';
import ShopPage from './pages/shop/shop.cmp';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.cmp';

import { auth } from './firebase/firebase.utils';




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
