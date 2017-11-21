import React, { Component } from 'react';
import Article from './Article.js';
import PropTypes from 'prop-types';

class News extends Component {
	constructor(props){
		super(props);
		this.state={counter: 0};
	}
	
	static propTypes = {
		data: PropTypes.array.isRequired
	}

	render() {
		let data = this.props.data;
		let newsTemplate;

		if(data.length>0){
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Article data={item} />
					</div>
				)
			})
		} else{
			newsTemplate=<p>К сожалению новостей нет</p>
		}

		return (
			<div className="news">
				{newsTemplate}
				<strong 
					className={`news__count ${data.length>0?'':'none'}`}> 
					Всего новостей: {data.length}
				</strong>
			</div>
		);
	}
};

export default News;
