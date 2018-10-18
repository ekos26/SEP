import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CampusList = props => {

      return (
        <div>
        <h2>List of Campuses</h2>
        { props.campuses.map(campus => (
              <li key = {campus.id}>
                <a href="#">
                  <img src={campus.imageUrl} />
                </a>
                <Link to={`/campuses/${campus.id}`}>{campus.name}
                </Link>
              </li>
            )) }
        </div>
      )
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}


export default connect(mapStateToProps, null)(CampusList)
