import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

class Completed extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div className="container"> 
            <h1>Completed Todos</h1>
            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
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
export default connect(mapStateToProps)(Completed)