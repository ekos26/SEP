import React from 'react'
import CampusList from './CampusList'
import { Route, Switch } from 'react-router-dom'
import StudentList from './StudentList'
import Campus from './Campus'
import Student from './Student'
import NavBar from './NavBar'
import { fetchCampuses } from '../reducers/campusesReducer';
import { fetchStudents } from '../reducers/studentsReducer';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class Root extends React.Component {

  componentDidMount() {
    this.props.getAllCampuses();
    this.props.getAllStudents();
  }

  render() {
    return (
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <div>
            <Switch>
            <Route exact path = "/campuses" component={CampusList} />
            <Route exact path = "/students" component={StudentList} />
            <Route path = "/campuses/campuses:Id" component={Campus} />
            <Route path = "/students/student:Id" component={Student} />
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCampuses: () => dispatch(fetchCampuses()),
    getAllStudents: () => dispatch(fetchStudents())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Root));
