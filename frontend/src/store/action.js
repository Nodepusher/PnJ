// src/store/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../utils/api';
import { userLoaded, loginSuccess, authError } from './authReducer';

export const loadUser = createAsyncThunk('auth/loadUser', async (_, { dispatch }) => {
  try {
    const res = await api.get('/auth/user');
    dispatch(userLoaded(res.data));
  } catch (err) {
    dispatch(authError());
  }
});

export const login = createAsyncThunk('auth/login', async ({ email, password }, { dispatch }) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post('/auth/login', body);
    dispatch(loginSuccess(res.data));
    dispatch(loadUser());
  } catch (err) {
    dispatch(authError());
  }
});
