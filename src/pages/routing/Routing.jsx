import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { CountryList, CountryDetails } from '../contents';
import { Container, Text } from '@shared';

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
                  <Container>
                    <Text tag="code">Loading List ...</Text>
                  </Container>
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
                  <Container>
                    <Text tag="code">Loading Details ...</Text>
                  </Container>
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
