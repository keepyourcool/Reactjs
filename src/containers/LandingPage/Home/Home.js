import React, { Component } from 'react';
import ToDoList from '../../ToDoList/ToDoList';
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className="home">
                <ToDoList
                    toDoProps={this.props.toDoProps} />
            </div>
        )
    }
}
export default Home;