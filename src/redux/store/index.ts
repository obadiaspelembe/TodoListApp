import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

import { TodosState } from '../actions/todos/todos.types';
import rootSaga from '../sagas';

/**
 * Definindo a interface dos Estados da aplicacao
 */
export interface ApplicationState {
    todos: TodosState
}

/**
 * Criar o Middleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Criar o Store aplicando todos os reducers e adicionando o Middleware
 */
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

/**
 * Iniciar o Middleware com o redux-saga
 */
sagaMiddleware.run(rootSaga)

export default store;