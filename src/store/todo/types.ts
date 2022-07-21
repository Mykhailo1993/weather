import {FETCH_TODO_SUCCESS} from './actionTypes';

export interface ITodo {}

export interface TodoState {
  todos: ITodo[];
}

export interface FetchTodoSuccessPayload {}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type TodoActions = FetchTodoSuccess;
