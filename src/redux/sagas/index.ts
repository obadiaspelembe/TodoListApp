import { all, takeLatest } from 'redux-saga/effects';

import { TodoTypes } from '../actions/todos/todos.types';
import { loadTodos } from './todos/todos.saga';

export default function* rootSaga() {
    return yield all([
        takeLatest(TodoTypes.LOAD_REQUEST, loadTodos)
    ]);
}