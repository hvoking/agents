// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Options } from './options';

import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';
import { useMarkers } from 'context/agents/markers';

export const Tooltip = () => {
  const { currentMarkerId } = useMarkers();
  const { markerGeometryType, setMarkerGeometryType } = useMask();
  const [ activeColors, setActiveColors ] = useState(false);

  if (!currentMarkerId) return <></>;

  const isIsoActive = markerGeometryType[currentMarkerId] === "iso";

  return (
      <div className="popup-item" onClick={(e: any) => e.stopPropagation()}>
        <Header 
          markerId={currentMarkerId} 
          setMarkerGeometryType={setMarkerGeometryType}
          setActiveColors={setActiveColors}
          isIsoActive={isIsoActive}
        />
        <Options 
          markerId={currentMarkerId} 
          activeColors={activeColors} 
          isIsoActive={isIsoActive}
        />
      </div>
  );
}

Tooltip.diplayName="Tooltip";