import { configureStore } from '@reduxjs/toolkit';
import popStateReducer from 'reducer/popup';

const store = configureStore({
  reducer: {
    popState: popStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
