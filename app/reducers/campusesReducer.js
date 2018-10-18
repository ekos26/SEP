import axios from 'axios'

const campusInitialState = [];

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_ONE_CAMPUS = 'ADD_ONE_CAMPUS';
const REMOVE_ONE_CAMPUS = 'REMOVE_ONE_CAMPUS';

const getCampusesFromServer = campuses => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

const removeOneCampus = id => {
    return {
        type: REMOVE_ONE_CAMPUS,
        id
    }
}

const addOneCampus = newCampus => {
    return {
        type: ADD_ONE_CAMPUS,
        newCampus
    }
}
export const fetchCampuses = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/api/campuses');
            const action = getCampusesFromServer(data);
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    }
}

export const deleteOneCampus = id => {
    return async dispatch => {
        try {
            await axios.delete(`/api/campuses/${id}`);
            const action = removeOneCampus(id);
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    }
}

export const addCampus = newCampus => {
    return async dispatch => {
        try {
        await axios.post('/api/campuses');
        const action = addOneCampus(newCampus);
        dispatch(action);
        } catch (error) {
            console.error(error)
        }
    }
}

export const campusesReducer = (state = campusInitialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case REMOVE_ONE_CAMPUS:
            return state.filter(element => element.id !== action.campus);
        case ADD_ONE_CAMPUS:
            return [...state, action.campus]
        default:
            return state;
    }
}