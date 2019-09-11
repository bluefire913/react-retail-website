import React, { Component } from 'react';
import ProductCard from '../../components/productcard.js'

class ProductListing extends Component 
{
	render(){
return (
     <div className="" id="navbarSupportedContent">

 <div className="row">
     {this.props.products.products.map((category, index)=>(
              <div className="col-md-2" key={category.code}>
        <ProductCard product={category}/>
		
		</div>
     	))}
     	</div>
	
	</div>

	)
	}
}

export default ProductListing;