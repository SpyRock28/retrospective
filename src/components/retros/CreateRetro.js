import React, {Component} from 'react';

class CreateRetro extends Component {
  state = {
    sprintName: '',
    startDate: '',
    endDate: '',
    teamName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      
        <form onSubmit={this.handleSubmit} className="retro-form">
          <h5 className="grey-text text-darken-2">New Retrospective</h5>
          <div className="input-field">
            <label htmlFor="teamName">Team Name</label>
            <input type="text" id="teamName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="sprintName">Sprint Name</label>
            <input type="text" id="sprintName" onChange={this.handleChange}/>
          </div>
          <div className="datePicker">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" onChange={this.handleChange}/>
          </div>
          <div className="datePicker">
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button type="submit" className="btn z-depth-0">Create</button>
          </div>
        </form>
      
    )
  }
}

export default CreateRetro;