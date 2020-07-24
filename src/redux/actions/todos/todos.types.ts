/**
 * Definindo Action Types
 */
 export enum TodoTypes {
    LOAD_REQUEST = '@todo/LOAD_REQUEST',
    LOAD_SUCCESS = '@todo/LOAD_SUCCESS',
    LOAD_FAILURE = '@todo/LOAD_FAILURE'
 }


 /**
  * Definindo os Data types baseado no json placeholder todo
  */
export interface Todo {
    id: number,
    title: String,
    userId: number,
    completed: boolean
}

/**
 * Definindo State type
 */

 export interface TodosState {
   readonly data: Todo[],
   readonly loading: boolean,
   readonly error: boolean
 }