
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
			todos: [],
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

	addTodo = (title,id) => {

		const newTodo = {
			"id": id,
			"title": title,
			"completed": false,
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




	removeTodo = () => {
		//...
	}

	changeTodo = () => {
		//
	}

	render() {
		return (
			<div className="page">
				<Header />
				<main className="todo-app">
					<AddTodo addTodo={this.addTodo} />
					<ListTodos todos={this.state.todos} />
				</main>
			</div>
		);
	}
}
export default App;
