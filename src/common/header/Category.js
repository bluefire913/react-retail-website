import React, { Component } from 'react';


class Category extends Component 
{
	render(){
return (
     <div>
     <ul class="cateories">
     {this.props.categories.subcategory.map((category)=>(
               
		<li class="category" name="{category.id}">
			{category.name}
		</li>

     	))}
	</ul>
	</div>
	)
	}
}

export default Category;