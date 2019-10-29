import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.cmp';
import ShopPage from './pages/shop/shop.cmp';
import Header from './components/header/header.cmp'




function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
