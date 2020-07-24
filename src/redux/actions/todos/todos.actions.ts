import { action } from 'typesafe-actions';
import { Todo, TodoTypes } from './todos.types';

/**
 * Definir todas as accoes do para o reducer Todo
 */

export const loadRequest = () => action(TodoTypes.LOAD_REQUEST);
export const loadSuccess = (data: Todo[]) => action(TodoTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(TodoTypes.LOAD_FAILURE);