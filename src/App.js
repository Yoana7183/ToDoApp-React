
import './App.css';
import React from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
import ListTodos from './components/todoList';


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
			id: this.state.todos.length + 1,
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

		this.setState({
			todos: [...this.state.todos, newTodo]
		})


		console.dir(`newTodo: ${newTodo}`);
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
					console.log('delete request successful')

					var index = this.state.todos.indexOf(todo);
					this.state.todos.splice(index, 1);

					this.setState({
						todos: [...this.state.todos]
					})
				}
				else { console.log('unsuccessful'); }
				return res
			})
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
					console.log('Successful Update JSON DB FALSE to TRUE');
					this.setState({
						todos: [...this.state.todos]
					})
				}
				else { console.log('Error! Information wasn\'t updated'); }
				return res
			})
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
					console.log('Successful Update JSON DB TRUE to FALSE');
					this.setState({
						todos: [...this.state.todos]
					})
				}
				else { console.log('Error! Information wasn\'t updated'); }
				return res
			})
	}

	render() {
		return (
			<div className="page">
				<Header />
				<main className="todo-app">

					<AddTodo addTodo={this.addTodo} />
					<ListTodos todosFromProps={[...this.state.todos]} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo} undoneTodo={this.undoneTodo} />
					

				</main>
			</div>
		);
	}
}

export default App;
