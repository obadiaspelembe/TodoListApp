import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';

import { TodosState } from '../actions/todos/todos.types';
import rootSaga from '../sagas';

export interface ApplicationState {
    todos: TodosState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
export default store;