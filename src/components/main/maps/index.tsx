// App imports
import { Wrapper } from './wrapper';
import { Message } from './message';
import { Cursor } from './cursor';
import { MapContainer } from './map';
import { Left } from './left';
import './styles.scss';

// Context imports
import { useMarkers } from '../../context/maps/markers';

export const Maps = () => {
  const { addPin } = useMarkers();

  return (
    <Wrapper> 
      <MapContainer/>
      {addPin && <Message/>}
      {addPin && <Cursor/>}
      <Left/>
    </Wrapper>
  );
};

Maps.displayName = "Maps";