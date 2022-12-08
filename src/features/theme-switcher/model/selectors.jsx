import { createSelector } from '@reduxjs/toolkit';

export const selectThemeMode = createSelector([(state) => state.theme.mode], (mode) => {
  return mode;
});
