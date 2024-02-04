// store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageSlice';

export default configureStore({
  reducer: {
    images: imageReducer,
    addText: (state, action) => {
      state.text.push(action.payload)}
    // Otros reducers...
  },
});
