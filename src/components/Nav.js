import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }

    handleClick(index) {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        const tabList = this.props.tabs.map((item, index) => {
            return (
                // <li key={index} className={this.state.currentIndex==index ? 'active':''} onClick={()=>{this.handleClick(index)}}><Link to={item.path}>{item.text}</Link></li>
                <li key={index} className={this.state.currentIndex==index ? 'active':''} onClick={this.handleClick.bind(this,index)}><Link to={item.path}>{item.text}</Link></li>
            )
        })
        return (
            <ul className="menu">
				{
					tabList
				}
			</ul>
        )
    }
}