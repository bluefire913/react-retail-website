import React, { Component } from 'react';
import logo from '../../logo.svg';
import categorydata from './common/header/categorydata.js'


        
class Header extends Component {
  render() {return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Retail Online</h2>
        </div>
    );
  }
}

export default Header;