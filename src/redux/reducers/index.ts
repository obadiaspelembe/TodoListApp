import { combineReducers } from 'redux';
import todosReducer from './todos/todos.reducers';

/**
 * Combinar todos os reducers da aplicacao em um so que sera chamado ao configurar o Store
 */
export default combineReducers({
    todosReducer,
})