import axios from 'axios'

const studentInitialState = [];

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_ONE_STUDENT = 'ADD_ONE_STUDENT'
const REMOVE_ONE_STUDENT = 'REMOVE_ONE_STUDENT'

const getStudentsFromServer = students => {
    return {
        type: GET_STUDENTS,
        students
    }
}

const removeOneStudent = id => {
    return {
        type: REMOVE_ONE_STUDENT,
        id
    }
}

const addOneStudent = newStudent => {
    return {
        type: ADD_ONE_STUDENT,
        newStudent
    }
}

export const fetchStudents = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('/api/students');
            const action = getStudentsFromServer(data);
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    }
}

export const deleteOneStudent = id => {
    return async dispatch => {
        try {
            await axios.delete(`/api/students/${id}`);
            const action = removeOneStudent(id);
            dispatch(action);
        } catch (error) {
            console.error(error);
        }
    }
}

export const addStudent = newStudent => {
    return async dispatch => {
        try {
            await axios.post('/studetns');
            const action = addOneStudent(newStudent);
            dispatch(action);
        } catch (error) {
            console.error(error)
        }
    }
}

export const studentsReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        default:
            return state;
    }
}