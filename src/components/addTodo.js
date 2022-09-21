import React from 'react';



class AddTodo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            value: ""

        }
    }
clickHandler=(e)=>{
    this.props.addTodo(this.state.value)
    this.setState({value: ""})
}
    render() {
        return (
            <div className="todo-add-div">
                <input type="text"

                    className="todo-add"
                    autoFocus
                    placeholder="Add new todo ..."
                    value={this.state.value}
                    onChange={(e) => { this.setState({ value: e.target.value }) }} />
                <button
                    className="todo-add-btn"
                    onClick={this.clickHandler}
                    type="button">Add</button>
            </div>
        );
    }
}



export default AddTodo;



