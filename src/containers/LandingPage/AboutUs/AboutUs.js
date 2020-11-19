import React, { Component } from 'react';
import ToDoList from '../../ToDoList/ToDoList';
import './AboutUs.css'
class AboutUs extends Component {
    render() {
        return (<div className="about-us">
            <ToDoList toDoProps={this.props.toDoProps} />
        </div>)
    }
}
export default AboutUs;