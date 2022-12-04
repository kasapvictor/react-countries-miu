import { createSelector } from '@reduxjs/toolkit';

import { buildCurrenciesStr, numberFormatted, toJoinData } from '../lib';

import { countryAdapter } from './slice';

export const { selectById, selectIds, selectAll } = countryAdapter.getSelectors((state) => {
  return state.countries;
});

export const selectFetchStatus = createSelector(
  [(state) => state.countries.statusFetch, (state) => state.countries.errorFetch],
  (statusFetch, errorFetch) => {
    return { statusFetch, errorFetch };
  },
);

export const selectSearchValue = createSelector([(state) => state.countries.search], (value) => {
  return value;
});

export const selectRegionValue = createSelector([(state) => state.countries.region], (value) => {
  return value;
});

export const selectFilteredIds = createSelector(
  [
    (state) => state.countries.ids,
    (state) => state.countries.entities,
    (state) => state.countries.search,
    (state) => state.countries.region,
  ],
  (ids, entities, searchValue, regionValue) => {
    const filteredIds = ids.reduce((accum, prev) => {
      const country = entities[prev];
      const countryName = country.name.common.toLowerCase();

      if (countryName.includes(searchValue)) {
        if (regionValue && country.region.toLowerCase() === regionValue) {
          accum.push(prev);
        }

        if (!regionValue) {
          accum.push(prev);
        }
      }
      return accum;
    }, []);

    return filteredIds;
  },
);

export const selectCountryById = createSelector([(state, countryId) => selectById(state, countryId)], (country) => {
  const {
    name,
    subregion,
    capital,
    languages,
    capitalInfo,
    latlng,
    coatOfArms,
    altSpellings,
    population,
    area,
    flags,
    region,
    currencies,
    tld,
    timezones,
    borders,
    cca3,
  } = country;

  // eslint-disable-next-line no-console
  console.log('COUNTRY', country);

  return {
    cca3,
    countryName: ['Name', name.common],
    capitalName: ['Capital', capital ? capital[0] : ''],
    coords: ['Coords', Object.values(capitalInfo).length ? capitalInfo.latlng : latlng],
    flag: ['Flag', flags.png],
    coatOfArms: ['Coat of Arms', Object.values(coatOfArms).length ? coatOfArms.png : null],
    spellings: ['Spellings', toJoinData(altSpellings)],
    capital: ['Capital', capital ? toJoinData(capital) : null],
    area: ['Area', numberFormatted(area)],
    region: ['Region', region],
    population: ['Population', numberFormatted(population)],
    subRegion: ['Subregion', subregion || null],
    currencies: ['Currencies', currencies ? buildCurrenciesStr(currencies) : null],
    languages: ['Languages', languages ? toJoinData(Object.values(languages)) : null],
    tld: ['Top Level Domain', tld.length ? toJoinData(tld) : null],
    timezones: ['Time Zones', toJoinData(timezones)],
    borders: ['Borders', borders || null],
  };
});
