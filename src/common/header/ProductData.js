import React, { Component } from 'react'
import ProductListing from '../../common/header/ProductListing.js'
export default class ProductData extends Component 
{
  products:[];
  constructor(props){
  super(props);
	
	}

	componentWillMount (){
        fetch("https://localhost:9002/mafcommercewebservices/v2/mafuae/en/products/category/products?categoryCode=NF8000000&access_token=2b351ac4-6c3a-474f-82de-91ca5f623a8e&app_id=Android&query=&currentPage=&pageSize=1000&sort=&fields=FULL"

        	, {
   mode: 'cors',

    
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Origin':'*'
  },
})  .then(res=>res.json())
        .then((data)=>{
        	this.setState((state) => ({ products: data}));
          console.log(data);
         console.log(this.state.products.products);
        })
         .catch(console.log)
	}

	render(){
     console.log(this.state);
    if(this.state!=null && this.state.products!=null){
		return (<ProductListing products={this.state.products}/>)
	}
  return null;
  }
}


