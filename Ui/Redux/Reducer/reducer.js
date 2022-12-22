import {EDIT, SUBMIT, DELETE_DATA} from '../Action/type';
const initialState = {
  userData: [],
};
console.log('initialStateinitialState', initialState);
export const addReducer = (state = initialState, action) => {
  // console.log('ACTION PAYLOAD', action);
  console.log('initialStateinitialState', state);
  switch (action.type) {
    case SUBMIT:
      return {...state, userData: [...state?.userData, action?.payload]};

    case EDIT:
      let tmp = state?.userData?.map(items => {
        if (items?.count === action.payload?.count) {
          return action.payload;
        }
        return items;
      });
      return {...state, userData: tmp};
    case DELETE_DATA:
      let tmp2 = state?.userData?.filter(
        item => item.count !== action.payload?.count,
      );

      return {...state, userData: tmp2};
    default:
      return state;
  }
};
//console.log('initialState', initialState);
