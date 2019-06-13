import React, { Component } from 'react'
class PendingTodosCount extends Component {
    render() {
        return (
            <div className="todo-footer">
                <strong><span className="count-todos"></span></strong> Items Left {this.props.count}
               </div>
        )
    }
}
export default PendingTodosCount