import { combineReducers } from 'redux';
import {
    ADD_TASK,
    DELETE_TASK,
    SET_FILTER,
    TOGGLE_TASK,
} from './actions';
const tasks = (state=[], action) => {
    // console.log("state: ", state);
    switch(action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(item => item.id !== action.payload);
        case TOGGLE_TASK:
            return state.map(item => 
                item.id === action.payload ? {...item, completed: !item.completed} : item
            )
        default:
            return state    
    }
}

const filter = (state="All", action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.payload
        default:
            return state  
    }
}
export default combineReducers({
    tasks,
    filter,
});