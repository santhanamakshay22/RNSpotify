import { createStore, combineReducers } from 'redux';
import countReducer from '../src/reducers/counterReducer.js';
import RootReducer from '../src/reducers/index'
//const rootReducer = combineReducers(
//{ count: countReducer }
//);
const configureStore = () => {
return createStore(RootReducer);
}
export default configureStore;