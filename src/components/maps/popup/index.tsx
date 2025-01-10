// App imports
import { Options } from './options';
import './styles.scss';

// Third-party imports
import { Marker } from 'react-map-gl';

export const CustomPopup: any = ({ coords }: any) => {
  if (!coords) return <></>;
  
  const { lng, lat } = coords;

  return (
    <Marker
      longitude={lng}
      latitude={lat}
      draggable={true}
    >
      <Options/>
    </Marker>
  );
}

CustomPopup.diplayName="CustomPopup";