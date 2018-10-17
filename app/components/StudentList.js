import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Student from './Student'


const StudentList = props => {
  
        return (
          <div>
          <h2>List of Students</h2>
          <ul>
          { props.students.map(student => (
                <li key = {student.id}>
                  <Link to={`/students/${student.id}`}>{`${student.firstName} ${student.lastName}`}
                  </Link>
                </li>
              )) }
          </ul>
          </div>
        )
}
  
  
  const mapStateToProps = state => {
    return {
      campuses: state.campuses,
      students: state.students
    }
  }

export default connect(mapStateToProps, null)(StudentList);
