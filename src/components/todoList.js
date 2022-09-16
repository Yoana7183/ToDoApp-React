import React from "react";


class ListTodos extends React.Component {


	constructor(props) {
		super(props)
		this.state = {
			todoItems: this.props.todosFromProps
		}
	}

	render() {


		return (
			<ul className="todo-list-items">
				{
					this.props.todosFromProps.map(todo => {

						if (!todo.completed) {

							return <li className="todoTitle" key={todo.id.toString()}>
								<div id="title"> {todo.title}</div>
								<br />
								<button className="deleteBtn" id={todo.id} onClick={() => { this.props.deleteTodo(todo) }}>Delete</button>
								<button id={todo.id} className="completeBtn" onClick={() => { this.props.completeTodo(todo) }}>Done</button>
							</li>

						} else {

							return <li className="todoTitle"id="title" key={todo.id.toString()}>
								<div className="done"id="title" >{todo.title}</div>
								<br />
								<button id={todo.id} className="deleteBtn" onClick={() => { this.props.deleteTodo(todo) }}>Delete</button>
								<button id={todo.id}  className="undoneBtn" onClick={() => { this.props.undoneTodo(todo) }}>Undone</button>
							</li>
							
						}
                       
					})

				}
			</ul>
		);
	}
}

export default ListTodos