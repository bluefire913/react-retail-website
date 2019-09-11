import React, { Component } from 'react';
import logo from '../../logo.svg';
import Categorydata from '../../common/header/Categorydata.js'


        
class Header extends Component {

	
  render() {

  	return (

    <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
             <a href="/"><h2>Retail Online</h2></a>
           </div>
           
           <div className="category">
       
         
           <Categorydata category={this.props.categoryCode}/>
       </div>
</div>
    );
  }
}

export default Header;