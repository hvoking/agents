// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Options } from './options';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Tooltip = ({ optionsCoords }: any) => {
  const { markers, currentMarkerId, colorPalette } = useMarkers();
  const [ activeFeature, setActiveFeature ] = useState<any>(null);

  const { lng, lat } = optionsCoords;

  if (!currentMarkerId) return <></>;

  const currentMarker = markers[currentMarkerId];

  return (
    <Marker longitude={lng} latitude={lat} draggable={true}>
      <div className="popup-item" onClick={(e: any) => e.stopPropagation()}>
        <Header 
          markerId={currentMarkerId} 
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
          currentMarker={currentMarker}
        />
        <Options 
          markerId={currentMarkerId} 
          activeFeature={activeFeature} 
          colorPalette={colorPalette}
          currentMarker={currentMarker}
        />
      </div>
    </Marker>
  );
}

Tooltip.diplayName="Tooltip";