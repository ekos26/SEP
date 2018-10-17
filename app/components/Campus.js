import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchOneCampus } from '../reducers/campusReducer'

class Campus extends React.Component {
  componentDidMount() {
    this.props.getCampus();
  }
        render () {

          const campus = this.props.campus;
          const students = this.props.students;
            return (
              <div>
              <h1>{campus.name}</h1>
              <a href='#'>
                <img src ={campus.imageUrl} />
              </a>
              <h3>Address: {campus.address}</h3>
              <h3>Image: {campus.imageUrl}</h3>
              <h3>Description: {campus.description}</h3>
              <h2>Students</h2>
              <ul>
                {
                  students ? students.map(student => (
                    <li key={student.id}>
                      <Link to={`/students/${student.id}`}>
                        {`${student.firstName} ${student.lastName}`}
                      </Link>
                    </li>
                  )) : 'No Students' }
              </ul>
              </div>
            )
        }
}

const mapStateToProps = state => {
  return {
    campus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCampus: () => dispatch(fetchOneCampus(ownProps.match.params.campusId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)

    
