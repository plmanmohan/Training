import { ADD_TASK, DELETE_TASK } from "./actions";

export const initialState = {
    tasks: []
};


const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            console.log('Inside reducer ADD_TASK')
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        default:
            return state;  
    }

}
export default reducer;