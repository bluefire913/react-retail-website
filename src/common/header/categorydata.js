import React, { Component } from 'react'

class CategoryData extends Component 
{
	state:{
		categories:[]
	}

	componentDidMount(){
        fetch("https://localhost:9002/mafcommercewebservices/v2/mafuae/en/catalogs/mafuaeProductCatalog/Online/categories/F4010000?access_token=efc493e8-79e1-437c-b99c-06c171d96630&app_id=Android")
        .then(res=>res.json)
        .then((data)=>{
        	this.setState({categories:data})
        })
         .catch(console.log)
	}
}