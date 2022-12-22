import {addReducer} from '../Reducer/reducer';
import {applyMiddleware, createStore} from 'redux';
import appReducer from '.';
import thunk from 'redux-thunk';

// export const store = createStore(addReducer);
const store = createStore(appReducer, {}, applyMiddleware(thunk));
export default store;
console.log('STORE', store);
