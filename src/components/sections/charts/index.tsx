// App imports
import { CancelCross } from './cross';
import { Header } from './header';
import { Dropdown } from './dropdown';
import { Card } from './card';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

const providersOptions = {
  "overture": [
    { id: 'overture-buildings', label: 'Overture Buildings' },
    { id: 'overture-roads', label: 'Overture Roads' },
  ],
  "foursquare": [{ id: 'foursquare-poi', label: 'Foursquare POI' }],
  "insideAirbnb": [{ id: 'inside-airbnb', label: 'Inside Airbnb' }],
}

export const Charts = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>;

  return (
    <div className="charts">
      {markers.map((marker: any, index: number) => (
        <div key={marker.id} className="agent-card">
          <CancelCross marker={marker}/>
          <Header marker={marker}/>
          <Dropdown layerOptions={providersOptions["overture"]}/>
          <Card marker={marker}/>
        </div>
      ))}
    </div>
  );
};

Charts.displayName = 'Charts';
