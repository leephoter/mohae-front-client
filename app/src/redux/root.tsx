/** @format */

import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './main/reducer';
import userReducer from './user/reducer';
import mypageReducer from './mypage/reducer';
import modalReducer from './modal/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    main: mainReducer,
    mypage: mypageReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;