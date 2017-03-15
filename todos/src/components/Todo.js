import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)


        this.state = {
            completed: ''
        }
    }

    handleCheckboxChange(event) {
     console.log(event);
     console.log('copmleted ' + this.props.id)
    }

    

    render() {

        return <li className="list-group-item">
            <div className="row">
                <div className="col-sm-6">
                    <input checked={this.props.completed === 'yes' ? true : ''} type="checkbox" onChange={(e) => this.props.toggleTodoComplete(this.props.id, e.target.checked)}/>
                    <span className={this.props.completed === 'yes' ? 'done' : ''}>{this.props.description}</span>
                </div>
                <div className="col-sm-6 text-right">
                    <span className="label label-success category">{this.props.category}</span>
                    {/*<span className="label label-danger">{this.props.date}</span>*/}
                </div>
            </div>
        </li>
    }
}

export default Todo;