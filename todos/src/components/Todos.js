import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class Todos extends React.Component {
    render() {
        return <ul className="list-group">
            <AddTodo />
            <Todo description={'qwer'}/>
            <Todo description={'asdf'}/>
            <Todo description={'zxcv'}/>
            <Todo description={'qwer'}/>
            <Todo description={'asdf'}/>
        </ul>
    }
}

export default Todos