import { divIcon } from 'leaflet/src/layer';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import { IoLocationSharp } from 'react-icons/io5';
import { MapContainer, Marker, TileLayer, GeoJSON } from 'react-leaflet';

import { COLOR, countriesShapes } from '@shared';

import { MapBox } from './styled';

export const Map = ({ countryById }) => {
  const { coords, cca3 } = countryById;
  const coordsData = [coords[1][0], coords[1][1]];
  const filteredByCca3 = countriesShapes.features.find((poly) => poly.properties.ISO_A3 === cca3);
  const icon = divIcon({
    html: renderToStaticMarkup(<IoLocationSharp style={{ fontSize: 32, color: COLOR.color15 }} />),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    className: 'leaflet-icon',
  });

  return (
    <MapBox>
      <MapContainer key={cca3} center={coordsData} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker center={coordsData} position={coordsData} icon={icon} />
        <GeoJSON data={filteredByCca3} />
      </MapContainer>
    </MapBox>
  );
};

Map.propTypes = {
  countryById: PropTypes.object,
};
