import React, { Component } from 'react'
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTodo(event) {
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ newTodo: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <div className="row">
                        <div className="col-xs-8">
                            <input type="text" className="form-control add-todo" placeholder="Add todo"
                                value={this.state.newTodo}
                                onChange={this.handleChange}></input>
                        </div>
                        <div className="col-xs-4">
                            <button id="checkAll" className="btn btn-success" type="submit" value="Submit"
                            >Add todo</button>
                        </div>
                    </div>
                </form>

                <hr></hr>
            </div>
        )
    }
}
export default NewTodoForm