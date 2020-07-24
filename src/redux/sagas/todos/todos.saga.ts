import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';

import { loadSuccess, loadFailure } from '../../actions/todos/todos.actions';


/**
 * Configuracao dos Sagas do Todo
 */
export function* loadTodos() {

    /**
     * Carrega a lista dos todos para o userId definido abaixo
     */

    const userId = 1;

    try {
        const response = yield call(api.get, `todos?userId=${userId}`);

        // adiciona ao loadSuccess no casos de sucesso
        yield put(loadSuccess(response.data));
    } catch ({}) {
        /**
         * chama o loadFailue para o caso de erro
         */
        yield put(loadFailure());
    }
}
