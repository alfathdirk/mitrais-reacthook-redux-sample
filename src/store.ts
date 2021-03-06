import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default configureStore({
  reducer: rootReducer
});
