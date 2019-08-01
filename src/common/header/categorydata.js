import React, { Component } from 'react'
import Category from '../../common/header/Category.js'
export default class Categorydata extends Component 
{
	state:{
		categories:[]
	}

	componentWillMount (){
        fetch("https://localhost:9002/mafcommercewebservices/v2/mafuae/en/catalogs/mafuaeProductCatalog/Online/categories/F4010000?access_token=efc493e8-79e1-437c-b99c-06c171d96630&app_id=Android"

        	, {
   mode: 'cors',

    
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Origin':'*'
  },
})  .then(res=>res.json)
        .then(json=>console.log(json))
        .then((data)=>{
        	this.setState({categories:data})
        })
         .catch(console.log)
	}

	render(){
          console.log("category called")
          console.log(this.state)
		return (<Category categories={this.state.categories}/>)
	}
}


