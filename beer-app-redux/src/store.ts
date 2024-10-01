import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './features/beerSlice';

export const store = configureStore({
  reducer: {
    beers: beerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
