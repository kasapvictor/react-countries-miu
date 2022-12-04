import { CountrySelectRegion, CountrySearch } from '@features';

import { FilterInner, FilterStyled } from './styled';

export const CountryFilter = () => {
  return (
    <FilterStyled>
      <FilterInner>
        <CountrySearch />
        <CountrySelectRegion />
      </FilterInner>
    </FilterStyled>
  );
};
