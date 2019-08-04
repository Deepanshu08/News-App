import React,{Component} from 'react';
import './App.css';

class News extends Component{
	constructor(props){
		super(props);
		this.state={
			isLoading:true,
			contacts:[]
		}
	}
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){
		var url="https://api.currentsapi.services/v1/latest-news";
		var bearer = 'Bearer ' + '97SLvVVSctNLSfVh8hxLTxPh02H-CuTRGFPDolRH1WFD4OUl';
		fetch(url, {
        	method: 'GET',
        	withCredentials: true,
        	credentials: 'include',
        	headers: {
            	'Authorization': bearer,
            	'Content-Type': 'application/json'
        	}
    	})
	}

	render(){
		return(
				<div>
					
				</div>
			);
	}

}
export default News;