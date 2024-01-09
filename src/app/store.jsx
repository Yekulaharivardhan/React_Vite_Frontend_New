import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/slices';

export const store = configureStore({
  reducer: rootReducer,
});
