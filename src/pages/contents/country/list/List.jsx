import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CountryCard, countryModel } from '@entities';
import { Container, STATUS, Text } from '@shared';
import { CountryFilter } from '@widgets';

import { LinkStyled, ListItem, ListStyled } from './styled';

const ListItems = () => {
  const filteredIds = useSelector(countryModel.selectFilteredIds);

  if (!filteredIds.length) {
    return (
      <Text tag="code" size="medium">
        Countries not found
      </Text>
    );
  }

  return filteredIds.map((countryId) => (
    <ListItem key={countryId}>
      <LinkStyled to={`/${countryId}`}>
        <CountryCard countryId={countryId} />
      </LinkStyled>
    </ListItem>
  ));
};

export const List = () => {
  const dispatch = useDispatch();

  const { statusFetch, errorFetch } = useSelector(countryModel.selectFetchStatus);

  useEffect(() => {
    if (statusFetch === STATUS.IDLE_STATUS) {
      dispatch(countryModel.fetchCountries());
    }
  }, []);

  return (
    <Container>
      {statusFetch === STATUS.LOADING_STATUS && <Text tag="code">Loading ...</Text>}

      {statusFetch === STATUS.FAILED_STATUS && <Text tag="code">{errorFetch}</Text>}

      {statusFetch === STATUS.SUCCESS_STATUS && (
        <>
          <CountryFilter />
          <ListStyled>
            <ListItems />
          </ListStyled>
        </>
      )}
    </Container>
  );
};
