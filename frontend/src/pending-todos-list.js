import React, { Component } from 'react'
class PendingTodosList extends Component {
    

    handleChange(index) {        
        this.props.updateTodo(this.props.todos[index], index);
    }


    render() {
        const todos = this.props.todos;
        
        return (
            <div>
                <ul id="sortable" className="list-unstyled">

                    {todos.map((value, index) => {
                     return <li className="ui-state-default" key={value.id}>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value={value.status} 
                                onChange={this.handleChange.bind(this, index)}/>{value.task}</label>
                        </div>
                    </li>
                    
                })}

                </ul>
            </div>
        )
    }
}
export default PendingTodosList