import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            category: '',
            addTodo: props.addTodo
        }
    }

    onClick() {
        if (this.state.category !== '' && this.state.description !== '') {
        // 1. POST to api/vi/todos
        fetch('/api/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: this.state.description,
                category: this.state.category,
                completed: false
            })
        })
        .then(response => response.json())
        .then(response => {
            // 2. Clear the form fields
            
            this.setState({
                description: '',
                category: ''
            })

            // 3. Reload list
            this.state.addTodo(response)
        })
        } else {
            alert('You must select a category and enter a task')
        }
    }



    render() {
        return <div> 
            <div className="field form-group">

                    <label htmlFor="categories">Categories:</label><br/>
                    <select id="categories" name="categories" className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                        <option value="">Pick a category</option>
                        <option value="Back-Burner">Back-Burner</option>
                        <option value="Class">Class</option>
                        <option value="Homework">Homework</option>
                        <option value="Personal">Personal</option>
                        <option value="Urgent">Urgent</option>
                    </select>

                </div>
                <div className="input-group input-group-lg form-group">
                    <input type="text" className="form-control" id="todoItem" placeholder="What is there to do? ..." value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                    <span className="input-group-btn">
                                <button className="btn btn-default" id="todoButton" type="button" onClick={() => this.onClick()}>DO IT!</button>
                            </span>
                </div>
            </div>
    }
}

export default AddTodo;