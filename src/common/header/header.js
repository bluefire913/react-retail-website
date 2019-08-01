import React, { Component } from 'react';
import logo from '../../logo.svg';
import Categorydata from '../../common/header/Categorydata.js'


        
class Header extends Component {

	
  render() {

  	return (

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Retail Online</h2>
          <h3> Browse Categories </h3>
           <Categorydata/>
        </div>

    );
  }
}

export default Header;