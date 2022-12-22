import {ADD, MINUS} from './type';

export const increment = data => ({
  type: ADD,
  payload: data,
});

export const decrement = data => ({
  type: MINUS,
  payload: data,
});
