import { Search as IconSearch } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import { useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countryModel } from '@entities';
import { SHADOW, SPACE, RADII, Spinner, COLOR } from '@shared';

const boxSx = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  gap: SPACE.small,
  width: 250,
  boxShadow: SHADOW.default,
  borderRadius: RADII.xsmall,
  pl: 2,

  '@media (max-width: 767px)': {
    width: '100%',
  },

  '& fieldset': {
    color: COLOR.color1,
    border: 'none',
  },

  '& label.MuiFormLabel-root': {
    color: COLOR.color1,
  },

  '& input': {
    color: COLOR.color1,
  },
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
        fullWidth
        id="search"
        value={searchValue}
        type="search"
        label="Search for country..."
        variant="outlined" // standart
        onChange={handleChange}
        placeholder="australia"
        autoComplete="off"
      />
      {isPending && (
        <Box sx={boxSpinnerSx}>
          <Spinner />
        </Box>
      )}
    </Box>
  );
};
