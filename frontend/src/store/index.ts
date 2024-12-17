import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productSlice from '../Pages/Product/store/slice';

const store = configureStore({
  reducer: {
    product: productSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
