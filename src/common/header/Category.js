import React from 'react';

const Category = ({categories})=>{

return (
     <div>
     <ul class="cateories">
     {categories.subcategory.map((category)=>(
               
		<li class="category" name="{category.id}">
			{category.name}
		</li>

     	))}
</ul>
</div>
	)

};