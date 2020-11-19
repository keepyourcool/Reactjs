import React, { Component } from 'react';
import ToDoList from '../../ToDoList/ToDoList';
import './Services.css'
class Services extends Component {
    render() {
        return (
            <div className="services">
                <ToDoList toDoProps={this.props.toDoProps} />
            </div>
        )
    }
}
export default Services;