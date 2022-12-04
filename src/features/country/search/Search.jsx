import { useTransition } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { countryModel } from '@entities';
import { Spinner } from '@shared';

import { SearchStyled, SearchInner, SearchInput, SearchIcon, SearchLoading } from './styled';

export const Search = () => {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const searchValue = useSelector(countryModel.selectSearchValue);

  const handleChange = (e) => {
    startTransition(() => {
      dispatch(countryModel.setSearch(e.target.value.toLowerCase()));
    });
  };

  return (
    <SearchStyled>
      <SearchInner>
        {isPending && (
          <SearchLoading>
            <Spinner />
          </SearchLoading>
        )}
        <SearchIcon>
          <IoSearch size={16} />
        </SearchIcon>
        <SearchInput value={searchValue} type="search" autoComplete="off" onChange={handleChange} placeholder="Search for a country..." />
      </SearchInner>
    </SearchStyled>
  );
};
