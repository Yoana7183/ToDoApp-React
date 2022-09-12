
import './App.css';
import React from 'react';
import Header from './components/header';
import AddTodo from './components/addTodo';
import ListTodos from './components/todoList';


class App extends React.Component {
  constructor(props){
		super(props)
		this.state = {
			todos: [],
		}
	}

	componentDidMount(){
		// fetch initial todos
		const url = ' http://localhost:8000/todos'
		fetch(url)
			.then(r=>{
				if(r.ok){
					return r.json()
				}
			})
			.then(data=> {
				// todos = data;
				this.setState({todos:data})
			})
			.catch( err=>console.warn(err) );
	}

	addTodo=(title)=>{
		console.log(`addtodo`);
		const newTodo = {
			id:this.state.todos.length+1,
			title: title,
			completed: false,
		}

		this.setState({
			todos:[...this.state.todos,newTodo]
		})

		// console.log(`newTodo: ${newTodo}`);
	}

	removeTodo=()=>{
		//...
	}

	changeTodo=()=>{
		//
	}

	render() {
		return (
			<div className="page">
				<Header/>
				<main className="todo-app">
				<AddTodo addTodo={this.addTodo}/>
				<ListTodos todos={this.state.todos}/>
				</main>
			</div>
		);
	}
}
export default App;
