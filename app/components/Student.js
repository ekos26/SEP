import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../reducers/studentReducer'

class Student extends React.Component {
  componentDidMount() {
    this.props.getStudent();
  }

      render () {

        const campus = this.props.student.campus;
        const student = this.props.student;

          return (
            <div>
            <h2>{student.firstName} {student.lastName}</h2>
            <a href='#'>
              <img src ={student.imageUrl} />
            </a>
            <h3>Email: {student.email}</h3>
            <h3>GPA: {student.gpa}</h3>
            <h2>Campus</h2>
            {
              campus ? (
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              ) : ( "Student doesn't have a campus")
            }
            </div>
          )
      }
}

const mapStateToProps = state => {
  return {
    student: state.student
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStudent: () => dispatch(fetchOneStudent(ownProps.match.params.studentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)
