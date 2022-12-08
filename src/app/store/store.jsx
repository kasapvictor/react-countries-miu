import { configureStore } from '@reduxjs/toolkit';

import { countryModel } from '@entities';
import { themeModel } from '@features';
export const store = configureStore({
  reducer: {
    countries: countryModel.reducer,
    theme: themeModel.reducer,
  },
});
