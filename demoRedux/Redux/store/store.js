import {createStore} from 'redux';
import {countReducer} from '../Reducer/reducer';
export const store = createStore(countReducer);
