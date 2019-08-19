import React, { Component } from 'react';


class Category extends Component 
{
	render(){
return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand">Browse Categories</a>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">

     <ul className="navbar-nav mr-auto">
     {this.props.categories.subcategories.map((category, index)=>(
               
		<li className="nav-item dropdown" key={category.id}>
		<a className="nav-link dropdown-toggle" href={"/c/"+category.id} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {category.name}
        </a>
			 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			{category.subcategories.map((subcategory)=>(
                  <a className="dropdown-item" href={"/c/"+subcategory.id}>{subcategory.name}</a>
				))}
				</div>
		</li>

     	))}
	</ul>
	 <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
	</div>
	</nav>
	)
	}
}

export default Category;