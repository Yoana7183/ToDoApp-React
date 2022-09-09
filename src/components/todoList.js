import React from "react";
import TodoItem from "./todos";

function ListTodos() {
   let todos = []

   return <ul> {todos.map(todo => <TodoItem />)}</ul>
};

export default ListTodos