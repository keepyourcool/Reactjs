import React, { Component } from 'react';
import ToDoList from '../../ToDoList/ToDoList';
import './Policy.css'
class Policy extends Component {
    render() {
        return (
            <div className="policy">
                <ToDoList toDoProps={this.props.toDoProps} />
            </div>
        )
    }
}
export default Policy;