import React from "react";



function ListTodos({ todos }) {
	return (
		<ul className="todo-list-items">
			{todos.map(todo => 
			<li dataid={todo.id} key={todo.id}>
				<span>{todo.title}</span>
				<br />
				<button onClick={(e) => { console.log(e.currentTarget.value) }}>Delete</button>
				<button>Done</button>
			</li>)}
		</ul>
	);
}

export default ListTodos