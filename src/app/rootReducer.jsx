// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/slices';
import phoneReducer from '../features/slices';
import addressReducer from '../features/slices';
 

const rootReducer = combineReducers({
  user: userReducer,
  phone: phoneReducer,
  address: addressReducer,
 
});

export default rootReducer;
