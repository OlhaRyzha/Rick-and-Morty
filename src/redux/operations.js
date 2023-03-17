import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCharacters, getFilteredByNameCharacters } from 'services/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getCharacters = createAsyncThunk(
  'characters/getAll',
  async (page, thunkAPI) => {
    try {
      return await fetchAllCharacters(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getfilteredByName = createAsyncThunk(
  'characters/filteredByName',
  async (obj, thunkAPI) => {
    try {
      return await getFilteredByNameCharacters(obj);
    } catch (error) {
      Notify.failure('There is nothing here. Please enter another word!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNameByValue = createAsyncThunk(
  'characters/NameByValue',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
