import axios from 'axios';

const singleStudentInitialState = {};

const GET_ONE_STUDENT = 'GET_ONE_STUDENT';

const getOneStudent = student => {
  return {
    type: GET_ONE_STUDENT,
    student
  };
};

export const fetchOneStudent = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      const action = getOneStudent(data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

export const studentReducer = (state = singleStudentInitialState, action) => {
  switch (action.type) {
    case GET_ONE_STUDENT:
      return action.student;
    default:
      return state;
  }
};