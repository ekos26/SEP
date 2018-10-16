import React from 'react'
import CampusList from './CampusList'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import StudentList from './StudentList'
import Campus from './Campus'
import Student from './Student'
import NavBar from './NavBar'

const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <div>
          <NavBar />
          <Switch>
          <Route exact path = "/campuses" component={CampusList} />
          <Route exact path = "/students" component={StudentList} />
          <Route exact path = "/campuses/campuses:Id" component={Campus} />
          <Route exact path ="/students/student:Id" component={Student} />
          </Switch>
        </div>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default Root

