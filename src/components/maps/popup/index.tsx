// App imports
import { Options } from './options';
import './styles.scss';

// Third-party imports
import { Popup } from 'react-map-gl';

export const CustomPopup: any = ({ coords }: any) => {
  const { lng, lat } = coords;

  return (
    <Popup
      longitude={lng}
      latitude={lat}
      offset={20}
      closeButton={false}
    >
      <Options/>
    </Popup>
  );
}

CustomPopup.diplayName="CustomPopup";