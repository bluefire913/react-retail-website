import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/header.js'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/homepage.js'
import ProductListPage from './pages/productlistpage.js'
class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={HomePage} />
       <Route exact path="/c/:id" component={ProductListPage} />
      </Switch>
    );
  }
}

export default App;
