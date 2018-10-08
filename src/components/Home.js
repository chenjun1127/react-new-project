import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {	 

	render() {
		return (
			<div>				
        		<h1 className="public_title">
        			<svg className="icon" aria-hidden="true">
		          		<use xlinkHref="#icon-xiaogantanhao"></use>
		        	</svg> 
		        	This is icon!
		        </h1>		        
      		</div>
		);
	}
}