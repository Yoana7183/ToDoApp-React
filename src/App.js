
import './App.css';
import React from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
import ListTodos from './components/todoList';
import TodoCounter from './components/todoCounter';


const url = ' http://localhost:8000/todos'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: []
		}
	}

	componentDidMount() {

		fetch(url)
			.then(r => {
				if (r.ok) {
					return r.json()
				}
			})
			.then(data => {
				this.setState({ todos: data })
			})
			.catch(err => console.warn(err));
	}

	addTodo = (title) => {

		const newTodo = {

			title: title,
			completed: false,
		}

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(newTodo),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then(resp => {
				if (resp.ok) {
					return resp.json()
				}
			}
			)
			.then(todo => {
				this.setState({
					todos: [...this.state.todos, todo]
				})


			})
			.catch(err => console.warn(err));
	}




	deleteTodo = (todo) => {

		var deleteURL = url + '/' + todo.id;

		fetch(deleteURL, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			},
		})
			.then(res => {
				if (res.ok) {

					var index = this.state.todos.indexOf(todo);
					this.state.todos.splice(index, 1);

					this.setState({
						todos: [...this.state.todos]
					})
				}

				return res
			})
			.catch(err => console.warn(err));
	}


	completeTodo = (todo) => {

		var completeTodoURL = url + '/' + todo.id;

		todo.completed = true;

		fetch(completeTodoURL, {
			method: 'PUT',
			body: JSON.stringify(todo),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => {
				if (res.ok) {

					this.setState({
						todos: [...this.state.todos]
					})
				}
				else { return res }

			})
			.catch(err => console.warn(err));
	}

	undoneTodo = (todo) => {

		var completeTodoURL = url + '/' + todo.id;

		todo.completed = false;

		fetch(completeTodoURL, {
			method: 'PUT',
			body: JSON.stringify(todo),
			headers: { 'Content-Type': 'application/json' },
		})
			.then(res => {
				if (res.ok) {

					this.setState({
						todos: [...this.state.todos]
					})
				}
				else { return res }
			})
			.catch(err => console.warn(err));
	}

	render() {
		return (
			<div className="page">
				<Header />
				<main className="todo-app">
					<AddTodo addTodo={this.addTodo} />
					<ListTodos todosFromProps={[...this.state.todos]} 
					deleteTodo={this.deleteTodo} 
					completeTodo={this.completeTodo} 
					undoneTodo={this.undoneTodo} />
					<TodoCounter todos={this.state.todos} />

				</main>
			</div>
		);
	}
}

export default App;
