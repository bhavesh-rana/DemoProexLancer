import {ADD, MINUS} from '../Action/type';

const initialState = {
  count: [],
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, count: state.count + 1};

    case MINUS:
      return {...state, count: state.count - 1};

    default:
      return state;
  }
};
