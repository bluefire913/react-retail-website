import React, { Component } from 'react'
import Header from '../common/header/header.js'
import ProductData from '../common/header/ProductData.js'

export default class ProductListPage extends React.Component  {

  render(){
  return (
    <div className="container">
    <div className="App">
     console.log("this.props.match");
    console.log(this.props.match);
        <Header categoryCode={this.props.match.params.id}/>
        Product list page 
       
        <ProductData  />
      
      </div>
    </div>
  )}
}