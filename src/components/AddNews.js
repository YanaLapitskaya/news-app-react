import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ee from '../EventEmitter';

class AddNews extends Component {
	constructor(props){
		super(props);
		this.state={
			agreeNotChecked: true,
			authorIsEmpty: true,
			textIsEmpty: true
		};
	}
	
	componentDidMount(){
		ReactDOM.findDOMNode(this.refs.author).focus();
	}

	onCheckRuleClick(e){
		this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	}

	onBtnClickHandler(e){
		e.preventDefault();
		let textEl = ReactDOM.findDOMNode(this.refs.text);
		
		let author = ReactDOM.findDOMNode(this.refs.author).value;
		let text = textEl.value;

		let item=[{
			author: author,
			text: text,
			bigText: '...'
		}];

		console.log(this.props);

		ee.emit('News.add', item);

		textEl.value='';
		this.setState({textIsEmpty: true});
	}

	onAuthorChange(e) {
		if (e.target.value.trim().length > 0) {
			this.setState({authorIsEmpty: false})
		} else {
			this.setState({authorIsEmpty: true})
		}
	}

	 onFieldChange(fieldName, e) {
	    if (e.target.value.trim().length > 0) {
	      this.setState({[''+fieldName]:false})
	    } else {
	      this.setState({[''+fieldName]:true})
	    }
	 }

	render() {
		let agreeNotChecked = this.state.agreeNotChecked,
			authorIsEmpty = this.state.authorIsEmpty,
			textIsEmpty = this.state.textIsEmpty;

		return (
			<form className='add cf'>
				<input
					type='text'
					className='add__author'
					defaultValue=''
					placeholder='Ваше имя'
					ref='author'
					onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
				/>
				<textarea
					className='add__text'
					defaultValue=''
					placeholder='Текст новости'
					ref='text'
					onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
				></textarea>
				<label className='add__checkrule'>
					<input 
						type='checkbox' 
						ref='checkrule' 
						onChange={this.onCheckRuleClick.bind(this)}
					/>
					Я согласен с правилами
				</label>
				<button
					className='add__btn'
					onClick={this.onBtnClickHandler.bind(this)}
					ref='alert_button'
					disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>
					Добавить новость
				</button>
			</form>
		);
	}
};

export default AddNews;
