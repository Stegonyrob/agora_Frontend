import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../reducers/textReducer';
import {thunk} from 'redux-thunk'; 
const store = configureStore({
 reducer: {
    texts: textReducer,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Agrega thunk como middleware
});

export default store;
