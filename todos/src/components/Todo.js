import React from 'react'

class Todo extends React.Component {
    render() {
        return <li className="list-group-item">
            <div className="row">
                <div className="col-sm-6">
                    <input type="checkbox"/>
                    {this.props.description}
                </div>
                <div className="col-sm-6">
                    <span className="label label-success">Category</span>
                    <span className="label label-danger">Date</span>
                </div>
            </div>
        </li>
    }
}

export default Todo;