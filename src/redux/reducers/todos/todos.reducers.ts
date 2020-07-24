import { Reducer } from 'redux';

import { TodosState, TodoTypes } from '../../actions/todos/todos.types';

/**
 * Estado inicial do reducer Todo
 */
const INITIAL_STATE: TodosState = {
    data: [],
    error: false,
    loading: false
}


/**
 * Configurar o estado  reducer com o tipo TodosState 
 * @param state 
 * @param action 
 */
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