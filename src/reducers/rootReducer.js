import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import grandChildData from './grandChildReducer';

export default combineReducers({
  homeReducer,
  grandChildData
});
