import React, { Component } from 'react';
import './ToDoList.css';
class ToDoList extends Component {
    state = {
        itemText: "",
        editItemId: "",
        editToDoItem: "",
        editingMode: false
    }
    componentWillUnmount() {
        this.props.toDoProps.closeClickHandler();
    }
    editClickHandler = (editItem) => {
        this.setState({ editingMode: true, editItemId: editItem.id, editToDoItem: editItem.toDoItem })


    }
    render() {
        const toDoList = this.props.toDoProps.toDoList.map((Item) => {
            return <div className="todolist-item" key={Item.id}>
                {this.state.editItemId === Item.id && this.state.editingMode ?
                    <div className="item">
                        <input autoFocus value={this.state.editToDoItem} onChange={(event) => { this.setState({ editToDoItem: event.target.value }) }} />
                        <i onClick={() => {
                            this.setState({ editingMode: false })
                            this.props.toDoProps.saveClickHandler({ id: this.state.editItemId, toDoItem: this.state.editToDoItem })
                        }
                        } className="fa fa-floppy-o" aria-hidden="true"></i>
                    </div>


                    : Item.toDoItem ? <div className="item">
                        <div className={Item.done ? "itemText strike-through" : "itemText"}>{Item.toDoItem}</div>
                        <div className="itemIcons">
                            {Item.done ? null : <i onClick={() => this.editClickHandler({ id: Item.id, toDoItem: Item.toDoItem })} className="fa fa-pencil" aria-hidden="true"></i>}
                            <i onClick={() => this.props.toDoProps.deleteClickHandler(Item.id)} className="fa fa-trash-o" aria-hidden="true"></i>
                            {Item.done ? null : <i onClick={() => { this.props.toDoProps.checkClickHandler(Item.id) }} className="fa fa-check" aria-hidden="true"></i>}
                        </div>

                    </div> : null}

            </div>
        })
        return (
            <div className="todolist">
                <div className="todolist-head item">
                    <div className="itemText"><strong><em>To Do List</em></strong></div>
                    <div className="itemIcons">
                        <i onClick={() => {
                            this.setState({ editingMode: false })
                            this.props.toDoProps.addClickHandler()
                        }} className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="todolist-body">
                    {toDoList}
                    {this.props.toDoProps.addNew ?
                        <div className="item">
                            <div className="itemText">
                                <input autoFocus value={this.state.itemText} onChange={(event) => { this.setState({ itemText: event.target.value }) }} /></div>
                            <div className="itemIcons">
                                <i onClick={() => {
                                    this.setState({ itemText: "" })
                                    this.props.toDoProps.saveClickHandler({ id: new Date(), toDoItem: this.state.itemText })
                                }
                                } className="fa fa-floppy-o" aria-hidden="true"></i>
                                <i onClick={() => {
                                    this.setState({ itemText: "" })
                                    this.props.toDoProps.closeClickHandler()
                                }} className="fa fa-times" aria-hidden="true"></i></div>

                        </div> : null}
                </div>
            </div>
        )
    }
}
export default ToDoList;