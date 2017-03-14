import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.toggleTodoComplete = this.toggleTodoComplete.bind(this)

        // sets initial empty state
        this.state = {
            todos: []
        }
    }

    // Lifecycle methods
    componentWillMount() {
        this.getTodos()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        // this.setState changes state
        .then(todos => this.setState({todos}))
    }

    addTodo(todo) {
        this.getTodos()     
        // let newTodos = this.state.todos
        // // newTodos.push(todo)
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    toggleTodoComplete(todoId, isComplete) {

    if (isComplete) {
        fetch('/api/v1/todos/' + todoId + '/complete')
        .then(this.getTodos)
    } else {
        fetch('/api/v1/todos/' + todoId + '/incomplete')
        .then(this.getTodos)
    }

}

    render() {
        let todos = this.state.todos.map((todo, key) => <Todo description={todo.todo} category={todo.category} id={todo.id} completed={todo.completed} key={key} toggleTodoComplete={this.toggleTodoComplete}/>)
        return <div className="container ">
            {/*<AddTodo addTodo={this.addTodo}/>*/}
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

export default Todos