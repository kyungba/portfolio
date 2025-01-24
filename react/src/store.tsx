import { configureStore } from '@reduxjs/toolkit';
import popStateReducer from 'reducer/popup';

export default configureStore({
  reducer: {
    popState: popStateReducer,
  },
});