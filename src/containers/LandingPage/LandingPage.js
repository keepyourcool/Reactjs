import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Policy from './Policy/Policy';
import Services from './Services/Services';
import './LandingPage.css'
class LandingPage extends Component {
    state = {
        toDoList: [],
        addNew: false,

    }
    addClickHandler = () => {
        this.setState({ addNew: true });
    }
    saveClickHandler = (item) => {
        const itemIndex = this.state.toDoList.findIndex((itmObj) => itmObj.id === item.id)
        const toDoList = [...this.state.toDoList]
        if (itemIndex !== -1 && item.toDoItem) {
            toDoList[itemIndex] = item;
        }
        else {
            if (item.toDoItem)
                toDoList.push(item);
        }
        this.setState({ toDoList, addNew: false });
    }
    closeClickHandler = () => {
        this.setState({ addNew: false })
    }
    deleteClickHandler = (id) => {
        const toDoList = this.state.toDoList.filter((itmObj) => {
            return itmObj.id !== id
        })
        this.setState({ toDoList })
    }
    checkClickHandler = (id) => {
        const itemIndex = this.state.toDoList.findIndex((itmObj) => itmObj.id === id)
        const newObj = {
            ...this.state.toDoList[itemIndex],
            done: true
        }
        const toDoList = [...this.state.toDoList]
        toDoList[itemIndex] = newObj;
        this.setState({ toDoList });


    }
    render() {
        const toDoProps = {
            toDoList: this.state.toDoList,
            addNew: this.state.addNew,
            addClickHandler: this.addClickHandler,
            saveClickHandler: this.saveClickHandler,
            closeClickHandler: this.closeClickHandler,
            deleteClickHandler: this.deleteClickHandler,
            checkClickHandler: this.checkClickHandler
        }
        return (
            <Aux>
                <div className="landing-page">
                    <Route path="/" exact render={() => <Home toDoProps={toDoProps} />} ></Route>
                    <Route path="/about-us" render={() => <AboutUs toDoProps={toDoProps} />} ></Route>
                    <Route path="/policy" exact render={() => <Policy toDoProps={toDoProps} />} ></Route>
                    <Route path="/services" render={() => <Services toDoProps={toDoProps} />} ></Route>
                </div>
            </Aux>
        )
    }
}
export default LandingPage;