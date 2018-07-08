import React from 'react';

export default class Home extends React.Component {
	 

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        		<h1 className="public_title">请绑定真实有效的车牌号码</h1>
		        <svg className="icon" aria-hidden="true">
		          	<use xlinkHref="#icon-xiaogantanhao"></use>
		        </svg>
      		</div>
		);
	}
}