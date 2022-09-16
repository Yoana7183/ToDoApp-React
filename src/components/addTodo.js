import React from 'react';



class AddTodo extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            value: "",

        }
    }

    render() {
        return (
            <div className="todo-add-div">
                <input type="text"

                    className="todo-add"
                    autoFocus
                    placeholder="add new todo ..."
                    onChange={(e) => { this.setState({ value: e.target.value }) }} />
                <button
                    className="todo-add-btn"
                    onClick={(e) => { this.props.addTodo(this.state.value) }}
                    type="button">Add</button>
            </div>
        );
    }
}



export default AddTodo;



