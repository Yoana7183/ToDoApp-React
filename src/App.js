
import './App.css';
import React from 'react';
import Header from './components/header';
import Todo from './components/addTodo';
import AddTodo from './components/todos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <Todo />
          <AddTodo />
    
        </p>
      </header>
    </div>
  );
}

export default App;
