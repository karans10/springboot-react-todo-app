import React, { Component } from 'react'
class CompletedTodosList extends Component {
    deleteTodo(todo, index) {
        this.props.deleteTodo(todo, index);
    }
    render() {
        const todos = this.props.todos
        return (
            <div>
                <ul id="done-items" className="list-unstyled">
                    {todos.map((todo, index) => {
                        return <li key={todo.id}>{todo.task} <button className="remove-item btn btn-default btn-xs pull-right" onClick={this.deleteTodo.bind(this, todo, index)}>
                            <span className="glyphicon glyphicon-remove"></span></button></li>
                    })}
                    

                  </ul>
            </div>
        )
    }
}
export default CompletedTodosList