import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Columns } from '@shared';

import { selectCountryById } from '../../model';

import { Body } from './Body';
import { Flag } from './Flag';
import { Footer } from './Footer';
import { Header } from './Header';
import { Map } from './Map';
import { DetailsContainer, DetailsContent } from './styled';

export const Details = () => {
  const { countryId } = useParams();
  const countryById = useSelector((state) => selectCountryById(state, countryId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DetailsContainer>
      <Columns columns={2} align="center">
        <Flag countryById={countryById} />

        <DetailsContent>
          <Header countryById={countryById} />
          <Body countryById={countryById} />
          <Footer countryById={countryById} />
        </DetailsContent>
      </Columns>

      <Map countryById={countryById} />
    </DetailsContainer>
  );
};
