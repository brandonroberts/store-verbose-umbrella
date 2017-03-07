import { Action } from '../../store';

export const INCREMENT = 'LAZY_INCREMENT';
export const DECREMENT = 'LAZY_DECREMENT';
export const RESET = 'LAZY_RESET';

export type State = number;

const initialState = 0;

export function reducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
