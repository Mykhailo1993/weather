import {createSelector} from 'reselect';

import {AppState} from '../rootReducer';

const getTodos = (state: AppState) => state.todo.todos;

export const getTodosSelector = createSelector(getTodos, todos => todos);
