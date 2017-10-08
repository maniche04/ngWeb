import { v4 as uuid } from 'uuid';

import { Action } from '@app/core';

export const initialState = {
  items: [
    { id: uuid(), name: 'Open Todo list example', done: true },
    { id: uuid(), name: 'Check the other examples', done: false },
    { id: uuid(), name: 'Use Angular ngRx Material Starter in your project', done: false }
  ],
  filter: 'ALL'
};

export type TodoFilter = 'ALL' | 'DONE' | 'ACTIVE';

export const TASKS_KEY = 'TASKS.TASKS';
export const TASKS_ADD = 'TASKS_ADD';
export const TASKS_TOGGLE = 'TASKS_TOGGLE';
export const TASKS_REMOVE_DONE = 'TASKS_REMOVE_DONE';
export const TASKS_FILTER = 'TASKS_FILTER';
export const TASKS_PERSIST = 'TASKS_PERSIST';

export const actionRemoveDoneTodos = () => ({ type: TASKS_REMOVE_DONE });
export const actionAddTodo = (name: string) =>
  ({ type: TASKS_ADD, payload: name });
export const actionToggleTodo = (id: string) =>
  ({ type: TASKS_TOGGLE, payload: id });
export const actionPersistTodos = (todos) =>
  ({ type: TASKS_PERSIST, payload: todos });
export const actionFilterTodos = (filter: TodoFilter) =>
  ({ type: TASKS_FILTER, payload: filter });

export const selectorTodos = state => state.tasks.tasks;

export function tasksReducer(state = initialState, action: Action) {
  switch (action.type) {
    case TASKS_ADD:
      return Object.assign({}, state, {
        items: state.items
          .concat({ id: uuid(), name: action.payload, done: false })
      });

    case TASKS_TOGGLE:
      state.items.some((item: Todo) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return true;
        }
      });
      return Object.assign({}, state, {
        items: [...state.items]
      });

    case TASKS_REMOVE_DONE:
      return Object.assign({}, state,
        { items: state.items.filter((item: Todo) => !item.done) });

    case TASKS_FILTER:
      return Object.assign({}, state, { filter: action.payload });

    default:
      return state;
  }
}

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}
