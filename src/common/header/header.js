import React, { Component } from 'react';
import logo from '../../logo.svg';
import Categorydata from '../../common/header/Categorydata.js'


        
class Header extends Component {

	
  render() {

  	return (
    <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
             <h2>Retail Online</h2>
           </div>
           
           <div class="category">
       
         
           <Categorydata/>
       </div>
</div>
    );
  }
}

export default Header;