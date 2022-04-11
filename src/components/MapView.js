// Libraries
import { Map } from 'pigeon-maps';

const MapView = ({ lng, lat }) => {
  return (
    <>
      <Map height={160} center={[lat, lng]} defaultZoom={11} />
    </>
  );
};

export default MapView;
