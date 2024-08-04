export const ADD_TASK = 'ADD_TASK';
export const ADIT_TASK = 'ADIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
})
export const editTask = (task) => ({
    type: ADIT_TASK,
    payload: task,
})
export const deleteTask = (task) => ({
    type: DELETE_TASK,
    payload: task,
})
export const toggleTask = (task) => ({
    type: TOGGLE_TASK,
    payload: task,
})
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
})

//action creator
// returns action which is an Object