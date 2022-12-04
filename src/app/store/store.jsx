import { configureStore } from '@reduxjs/toolkit';

import { countryModel } from '@entities';

export const store = configureStore({
  reducer: {
    countries: countryModel.reducer,
  },
});
