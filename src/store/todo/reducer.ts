import {FETCH_TODO_SUCCESS} from './actionTypes';

import {TodoActions, TodoState} from './types';

const initialState: TodoState = {
  todos: [],
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
      };
    default:
      return {
        ...state,
      };
  }
};
