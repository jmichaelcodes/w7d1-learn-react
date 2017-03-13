import React from 'react'

class AddTodo extends React.Component {
    render() {
        return <div> 
            <div class="field">

                    <label for="categories">Categories:</label><br/>
                    <select id="categories" name="categories">
                        <option value="none">Pick a category</option>
                        <option value="Back-Burner">Back-Burner</option>
                        <option value="Class">Class</option>
                        <option value="Homework">Homework</option>
                        <option value="Personal">Personal</option>
                        <option value="Urgent">Urgent</option>
                    </select><br/><br/>

                </div>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" id="todoItem" placeholder="What is there to do? ..."/>
                    <span className="input-group-btn">
                                <button className="btn btn-default" id="todoButton" type="button">DO IT!</button>
                            </span>
                </div>
                </div>
    }
}

export default AddTodo;