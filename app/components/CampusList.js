import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Campus from './Campus'

class CampusList extends React.Component {

  componentDidMount () {
    this.props.fetchInitialCampuses()
  }

  render () {
      return (
        <div>
        <h2>List of Campuses</h2>
        { this.props.campuses.map(campus => (
              <li key = {campus.id}>
                <img src={campus.imageUrl} />
                <Link to={`/campuses/${campus.id}`}>{campus.name}
                </Link>
              </li>
            )) }
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}


export default connect(mapStateToProps, null)(CampusList)
