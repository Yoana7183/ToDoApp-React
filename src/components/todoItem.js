import React from "react"


class TodoItem extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
       
        return (<div>{this.props.title}
        <button>Delete</button>
        <button>Done</button></div>);
    }
}

export default TodoItem