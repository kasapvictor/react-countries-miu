import { Search as IconSearch } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import { useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countryModel } from '@entities';
import { SPACE, Spinner } from '@shared';

const boxSx = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  gap: SPACE.small,
};

const boxSpinnerSx = {
  position: 'absolute',
  right: -30,
  top: '50%',
  transform: 'translateY(-50%)',
};

const useSearch = () => {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const searchValue = useSelector(countryModel.selectSearchValue);

  const handleChange = (e) => {
    startTransition(() => {
      dispatch(countryModel.setSearch(e.target.value.toLowerCase()));
    });
  };

  return { isPending, searchValue, handleChange };
};

export const Search = () => {
  const { isPending, searchValue, handleChange } = useSearch();

  return (
    <Box sx={boxSx}>
      <IconSearch />
      <TextField
        id="search"
        value={searchValue}
        type="search"
        label="Search for country..."
        variant="outlined"
        onChange={handleChange}
        placeholder="australia"
      />
      {isPending && (
        <Box sx={boxSpinnerSx}>
          <Spinner />
        </Box>
      )}
    </Box>
  );
};
