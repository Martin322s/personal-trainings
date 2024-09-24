import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timeReducer.js';

const store = configureStore({
  reducer: timerReducer,
});

export default store;