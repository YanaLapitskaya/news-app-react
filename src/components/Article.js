import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component{
	constructor(props){
		super(props);
		this.state={visible: false};
	}

	static propTypes = {
		data: PropTypes.shape({
			author: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			bigText: PropTypes.string.isRequired
		})
	}

	readmoreClick(e) {
		e.preventDefault();
		this.setState({visible: true});
	}

	render() {
		let author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;

		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
				<a href="#" 
					onClick={this.readmoreClick} 
					className={`news__readmore ${visible?'none':''}`}>
					Подробнее
				</a>
				<p className={`news__big-text ${visible?'':'none'}`}>{bigText}</p>
			</div>
		)
	}
};

export default Article;
