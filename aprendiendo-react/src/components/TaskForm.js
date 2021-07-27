import React, {Component} from 'react';

export default class TaskForm extends Component {
	state = {
		title: '',
		description: ''
	}
	submitForm = e => {
		e.preventDefault();
		this.props.addTask(this.state.title, this.state.description)
	}
	getInputValue = e => {
		//console.log(e.target.name, e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render() {
		return (
			<form onSubmit={this.submitForm}>
				<input 
				type="text" 
				name="title" 
				placeholder="write a task" 
				onInput={this.getInputValue} value={this.state.title}/>
				<br/>
				<textarea 
				name="description"
				placeholder="write a description" 
				onChange={this.getInputValue}
				value={this.state.description}></textarea>
				<br />
				<input type="submit" value="add task" />
			</form>
			)
	}
}