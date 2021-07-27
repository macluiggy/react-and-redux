import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {
    changeStyleWhenChecked() {
        return {
            color: this.props.task.done ? 'gray' : 'black',
            border: 'solid black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
        }
    }

    render() {
        console.log(this.props)
        const { id, title, description, done } = this.props.task;
        let border = { border: 'solid' }
        return <div className="yellow" style={border, this.changeStyleWhenChecked()}>
        {title} - 
		{description} - 
		{done} - 
		{id} 
        <input type="checkbox" onInput={this.props.checkDone.bind(this, id)}/>
        <button style={bottonDelete} onClick={this.props.deleteTask.bind(this, id)}>x</button>
		</div>
    }
}

let bottonDelete = {
    padding: '0 15px',
    borderRadius: '3em',
    cursor: 'pointer',
}

Task.propTypes = {
	task: PropTypes.object.isRequired
}

export default Task;