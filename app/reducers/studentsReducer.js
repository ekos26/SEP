import axios from 'axios'

const studentInitialState = [];

const GET_STUDENTS = 'GET_STUDENTS';

const getStudentsFromServer = students => {
    return {
        type: GET_STUDENTS,
        students
    }
}

export const fetchStudents = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/api/students');
            const action = getStudentsFromServer(data);
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }
}

export const studentReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        default:
            return state;
    }
}