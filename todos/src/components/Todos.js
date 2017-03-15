import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Todo from './Todo'
import AddTodo from './AddTodo'
import Completed from './Completed'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        // sets initial empty state
        // this.state = {
        //     todos: []
        // }
    }

    // Lifecycle methods
    componentWillMount() {

        this.getTodos()
    }

    // API methods
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        // this.setState changes state
        // runs render
        .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))
    }

    addTodo(todo) {
        this.getTodos()     
        // let newTodos = this.state.todos
        // // newTodos.push(todo)
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    toggleTodoComplete(todoId, isComplete) {

    // if (isComplete) {
    //     fetch('/api/v1/todos/' + todoId + '/complete')
    //     .then(this.getTodos)
    // } else {
    //     fetch('/api/v1/todos/' + todoId + '/incomplete')
    //     .then(this.getTodos)
    // }

    fetch('api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
    .then(this.getTodos)

}

    render() {
        let todos = this.props.sharedTodos.map((todo, key) => <Todo description={todo.todo} category={todo.category} id={todo.id} completed={todo.completed} key={key} toggleTodoComplete={this.toggleTodoComplete}/>)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo above.</div>
        }

        return <div className="container ">
            {/*<AddTodo addTodo={this.addTodo}/>*/}
            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
            <AddTodo addTodo={(todo) => this.addTodo(todo)}/>
        <ul className="list-group ulContainer">
            {/*<Todo description={'qwer'} category={'category'} date="2017-03-14"/>
            <Todo description={'asdf'} category={'another category'} date="2017-03-14"/>
            <Todo description={'zxcv'} category={'third category'} date="2017-03-14"/>
            <Todo description={'qwer'} category={'category #4'} date="2017-03-14"/>
            <Todo description={'asdf'} category={'category 5'} date="2017-03-14"/>*/}
            {todos}
        </ul>
        </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)