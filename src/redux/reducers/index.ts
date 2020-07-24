import { combineReducers } from 'redux';
import todosReducer from './todos/todos.reducers';

export default combineReducers({
    todosReducer,
})