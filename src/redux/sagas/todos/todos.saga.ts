import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';

import { loadSuccess, loadFailure } from '../../actions/todos/todos.actions';

export function* loadTodos() {
    try {
        const response = yield call(api.get, 'todos?userId=1');

        yield put(loadSuccess(response.data));
    } catch (error) {
        yield put(loadFailure());
    }
}
