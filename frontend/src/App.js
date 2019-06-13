import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewTodoForm from './new-todo-form';
import PendingTodosList from './pending-todos-list';
import PendingTodosCount from './pending-todos-count';
import CompletedTodosList from './completed-todos-list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      completedTodos: [],
      pendingTodos: [],
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    fetch('/todos')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            completedTodos: this.filterTodos(result, true),
            pendingTodos: this.filterTodos(result, false)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  addTodo(task) {
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: false,
        task: task
      })
    })
    .then(res => res.json())
    .then((res) => {
        this.setState({pendingTodos: [...this.state.pendingTodos, res]}  )
      }
    
    )
  }

  updateTodo(todo, index) {
    todo.status = !todo.status;
    const url = '/todos/'+todo.id;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then((res) => {
        if (res.status) {
          const pendingTodos = this.state.pendingTodos;
          pendingTodos.splice(index,1);
          this.setState({pendingTodos: pendingTodos}  );
          this.setState({completedTodos: [...this.state.completedTodos, res]}  );
        } else {
          const completedTodos = this.state.completedTodos;
          completedTodos.splice(index,1);
          this.setState({completedTodos: completedTodos}  );
          this.setState({pendingTodos: [...this.state.pendingTodos, res]}  )
        }
        
      }
    
    )
  }

  deleteTodo(todo, index) {
    const url = '/todos/'+todo.id;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(() => {
          const completedTodos = this.state.completedTodos;
          completedTodos.splice(index,1);
          this.setState({completedTodos: completedTodos}  );
        
      }
    
    )
  }

  filterTodos(todos, status) {
    return todos.filter((todo) => {
      if (status) {
        return todo.status
      } else  {
        return !todo.status;
      }
       
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="todolist not-done">
                <h1>Todos</h1>
                <NewTodoForm addTodo={this.addTodo}/>
                <PendingTodosCount count={this.state.pendingTodos.length}/>
                <PendingTodosList todos={this.state.pendingTodos} updateTodo={this.updateTodo}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="todolist">
                <h1>Already Done</h1>
                <CompletedTodosList todos={this.state.completedTodos} deleteTodo={this.deleteTodo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
