import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampus } from '../reducers/campusesReducer'


export class AddCampusForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        address: '',
        description: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.addCampus(this.state);
      this.setState({
        name: '',
        address: '',
        email: '',
      })
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Campus Name: </label>
            <div>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
          </div>
  
          <div>
            <label>Address: </label>
            <div>
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
            </div>
          </div>

          <div>
            <label>Description: </label>
            <div>
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
          </div>

          <button type="submit">Add Campus</button>
        </form>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      postCampus: campus => dispatch(addCampus(campus))
    }
  }
  
  const ConnectedAddCampusForm = connect(null, mapDispatchToProps)(AddCampusForm);
  
  export default ConnectedAddCampusForm;
