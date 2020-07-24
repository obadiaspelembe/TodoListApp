import { Reducer } from 'redux';

import { TodosState, TodoTypes } from '../../actions/todos/todos.types';

const INITIAL_STATE: TodosState = {
    data: [
        { id: 1, completed: false, title: 'Hello World', userId: 1 }
    ],
    error: false,
    loading: false
}


const todoReducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TodoTypes.LOAD_REQUEST:
            return { ...state, loading: true };
            
        case TodoTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            };
        case TodoTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            };

        default:
            return state;
    }
}


export default todoReducer;