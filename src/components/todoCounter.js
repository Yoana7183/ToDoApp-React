import React from "react"

class TodoCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const counter = this.props.todos.length
        return (

            <div className="counter-todo">
                My Todo List Contains: <span className="space">{counter} Items</span>
            </div>
        );

    }
}
export default TodoCounter