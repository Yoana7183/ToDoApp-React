import React from "react";


function ListTodos({todos}) {
	return (
		<ul className="todo-list-items">
			{todos.map(todo=><li dataid={todo.id} key={todo.id}>
				<span>{todo.title}</span>
				<div className="removeTodo"><i className="far fa-trash-alt"></i></div>
			</li>)}
		</ul>
	);
}


export default ListTodos