import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL3 = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get(API_URL3);

  // eslint-disable-next-line no-console
  console.log('response', response);

  return response.data;
});
