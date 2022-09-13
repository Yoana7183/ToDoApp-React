import React from "react";



function ListTodos({ todos }) {
	return (
		<div>
			<ul className="todo-list-items">
				{todos.map(todo => <li dataid={todo.id} key={todo.id}>
					<span>{todo.title}
						{todo.id}
						<button  id={todo.id} todo-title={todo.title} >Delete</button>
						<button id={todo.id}>Done</button>
					</span>
				</li>)}
			</ul>
		</div>
	);
}


export default ListTodos