import {combineReducers} from 'redux';
import {addReducer} from '../Reducer/reducer';

const appReducer = combineReducers({
  user: addReducer,
});

export default appReducer;
