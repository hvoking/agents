// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Options } from './options';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

// Context imports
import { useBoundary } from 'context/events/boundary';

// Third-party imports
import { Marker } from 'react-map-gl/mapbox';

export const Tooltip = () => {
  const { optionsCoords } = useBoundary();

  const { markers, currentMarkerId, colorPalette } = useMarkers();
  const [ activeFeature, setActiveFeature ] = useState<any>(null);

  if (!currentMarkerId || !optionsCoords) return <></>;

  const { lng, lat } = optionsCoords;
  const currentMarker = markers[currentMarkerId];

  return (
    <Marker longitude={lng} latitude={lat} draggable>
      <div className="popup-item" onClick={(e: any) => e.stopPropagation()}>
        <Header 
          currentMarker={currentMarker} 
          activeFeature={activeFeature} 
          setActiveFeature={setActiveFeature}
        />
        <Options 
          currentMarker={currentMarker}
          activeFeature={activeFeature} 
          colorPalette={colorPalette}
          
        />
      </div>
    </Marker>
  );
}

Tooltip.diplayName="Tooltip";