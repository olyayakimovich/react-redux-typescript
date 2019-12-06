import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface Store {
  todos: Todo[];
}

export const reducers = combineReducers<Store>({
  todos: todosReducer
});
