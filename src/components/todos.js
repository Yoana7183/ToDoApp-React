import React from "react"
function TodoItem(props) {

    return <li> {props.todo.titte}
        <button>Delete</button>
        <button>Done</button>
    </li>


}
export default TodoItem