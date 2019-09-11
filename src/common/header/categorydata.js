import React, { Component } from 'react'
import Category from '../../common/header/Category.js'
export default class Categorydata extends Component 
{
  categories:[];
  constructor(props){
  super(props);
	
	}

	componentWillMount (){
		
		const url= 'https://localhost:9002/mafcommercewebservices/v2/mafuae/en/catalogs/mafuaeProductCatalog/Online/categories/'+this.props.category+'?access_token=2b351ac4-6c3a-474f-82de-91ca5f623a8e&app_id=Android';
        console.log(url);
        fetch("https://localhost:9002/mafcommercewebservices/v2/mafuae/en/catalogs/mafuaeProductCatalog/Online/categories/NF8000000?access_token=2b351ac4-6c3a-474f-82de-91ca5f623a8e&app_id=Android"

        	, {
   mode: 'cors',

    
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Origin':'*'
  },
})  .then(res=>res.json())
        .then((data)=>{
        	this.setState((state) => ({ categories: data}));
          console.log(data);
         console.log(this.state);
        })
         .catch(console.log)
	}

	render(){
     console.log(this.state);
    if(this.state!=null && this.state.categories!=null){
		return (<Category categories={this.state.categories}/>)
	}
  return null;
  }
}


