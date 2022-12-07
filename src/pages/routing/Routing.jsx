import { Typography } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { BaseTemplate } from '../templates';

const CountryList = lazy(() => import('../contents/country/list'));
const CountryDetails = lazy(() => import('../contents/country/details'));

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseTemplate />}>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <Typography component="code" variant="body1" fontFamily="monospace">
                    Loading List ...
                  </Typography>
                }>
                <CountryList />
              </Suspense>
            }
          />
          <Route
            path="/:countryId"
            element={
              <Suspense
                fallback={
                  <Typography component="code" variant="body1" fontFamily="monospace">
                    Loading Details ...
                  </Typography>
                }>
                <CountryDetails />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
