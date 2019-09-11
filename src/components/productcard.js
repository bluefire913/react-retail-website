import React, { Component } from 'react';


class ProductCard extends Component 
{
	render(){
		return(
			<div className="productcard">
		<a className="" href={"/p/"+this.props.product.code} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         
       
        <figure className="comp-productcard__fig">
						<img className="comp-productcard__img" src="https://cdnprod.mafretailproxy.com/cdn-cgi/image/format=auto,onerror=redirect/sys-master-prod/h5b/h27/9276064170014/1634105_main.jpg_200Wx200H" alt="Low-Fat Brazilian Beef Cubes Family Pack 1.2Kg" title="Low-Fat Brazilian Beef Cubes Family Pack 1.2Kg" name=""/>
			<div className="comp-product-sticker__wrapper ">

							<div className="comp-product-sticker__label  ">
								</div>
						</div>
						</figure>
						 {this.props.product.name}
			  </a>
			  </div>
			)
	}
}

export default ProductCard;