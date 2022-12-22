import {EDIT, SUBMIT, DELETE_DATA} from './type';
// export const ONSUBMIT = data => ({
//   type: SUBMIT,
//   payload: data,
// });
// export const ONEDIT = data => ({
//   type: EDIT,
//   payload: data,
// });
export const ONSUBMIT = request => async dispatch => {
  dispatch({type: SUBMIT, payload: request});
  // console.log("request",request);
};

export const ONEDIT = request => async dispatch => {
  dispatch({type: EDIT, payload: request});
  //console.log('request', request);
};
export const DELETE = request => async dispatch => {
  dispatch({type: DELETE_DATA, payload: request});
};
