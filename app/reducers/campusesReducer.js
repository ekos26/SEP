import axios from 'axios'

const campusInitialState = [];

const GET_CAMPUSES = 'GET_CAMPUSES';

const getCampusesFromServer = campuses => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export const fetchCampuses = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/api/campuses');
            const action = getCampusesFromServer(data);
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }
}

export const campusesReducer = (state = campusInitialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        default:
            return state;
    }
}