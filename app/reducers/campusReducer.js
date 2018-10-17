import axios from 'axios';

const singleCampusInitialState = {};

const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';

const getOneCampus = campus => {
  return {
    type: GET_ONE_CAMPUS,
    campus
  };
};

export const fetchOneCampus = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      const action = getOneCampus(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const campusReducer = (state = singleCampusInitialState, action) => {
  switch (action.type) {
    case GET_ONE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};