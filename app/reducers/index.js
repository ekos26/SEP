import { combineReducers } from "redux";
import { campusesReducer } from "./campusesReducer";
import { studentsReducer } from "./studentsReducer"
import { campusReducer } from './campusReducer'
import { studentReducer } from './studentReducer'

// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'

// const initialState = {}

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleStudent: studentReducer,
  singleCampus: campusReducer
});

export default rootReducer
