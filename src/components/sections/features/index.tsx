// App imports
import { Card } from './card';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Features = () => {
  const { markers } = useMarkers();

  if (!(markers.length > 0)) return <></>;

  return (
    <div className="features-wrapper">
      {markers.map((marker: any) => (
        <div key={marker.id}>
          <Card marker={marker}/>
        </div>
      ))}
    </div>
  );
};

Features.displayName = 'Features';