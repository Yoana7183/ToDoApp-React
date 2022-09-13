import React from "react";



function ListTodos({ todos }) {
	return (
		<div>
			<ul className="todo-list-items">
				{todos.map(todo => <li dataid={todo.id} key={todo.id}>
					{todo.id} {todo.title}

					<button id={todo.id} todo-title={todo.title} >Delete</button>
					<button id={todo.id}>Done</button>

				</li>)}
			</ul>
		</div>
	);
}


export default ListTodos