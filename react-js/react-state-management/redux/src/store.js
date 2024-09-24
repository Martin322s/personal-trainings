import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import timeReducer from './timeReducer';
import { counterReducer } from './countReducer';

const rootReducer = combineReducers({
    timer: timeReducer,
    counter: counterReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;