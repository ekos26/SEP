import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../reducers/studentsReducer'

export class AddStudentForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            gpa: '',
        })

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Student First Name: </label>
                    <div>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </div>
                </div>

                <div>
                    <label>Student Last Name: </label>
                    <div>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </div>
                </div>

                <div>
                    <label>Student Email: </label>
                    <div>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                </div>

                <div>
                    <label>Student GPA: </label>
                    <div>
                    <input type="text" name="gpa" value={this.state.gpa} onChange={this.handleChange} />
                    </div>
                </div>

                <button type="submit">Add Student</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postStudent: student => dispatch(addStudent(student))
    }
}

const ConnectedAddStudentForm = connect(null, mapDispatchToProps)(AddStudentForm);

export default ConnectedAddStudentForm;

