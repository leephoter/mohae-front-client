/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINT } from '../../utils/ENDPOINT';

const GET_USER_INFO = 'get_user_info';

const asyncThunk = (name: string, param: string | number) =>
  createAsyncThunk<any, void, {}>(name, async () => {
    const response = await axios.get(`${ENDPOINT}${param}`);
    return response.data;
  });

export const getHotAll = asyncThunk('getUserInfo', 5);

const initialState = {
  isLoading: true,
  user: {
    profile: null,
    boards: {},
  },
};

export const mypage = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    [GET_USER_INFO]: (state, action: PayloadAction<any>) => {
      state.user.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getHotAll.pending, (state, { payload }) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getHotAll.fulfilled, (state, { payload }) => {
    //     state.allBoard = payload.response;
    //     state.isLoading = false;
    //   })
    //   .addCase(getHotAll.rejected, (state, { payload }) => {});
  },
});
// 생성 추가 삭제
export const { get_user_info } = mypage.actions;
export default mypage.reducer;
// action, reducer, store

// response >> Array
