// React imports
import { useState } from 'react';

// App imports
import { Header } from './header';
import { Options } from './options';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Tooltip = () => {
  const { currentMarkerId } = useMarkers();
  const [ activeFeature, setActiveFeature ] = useState<any>(null);

  if (!currentMarkerId) return <></>;

  return (
      <div 
        className="popup-item" 
        onClick={(e: any) => e.stopPropagation()}
      >
        <Header 
          markerId={currentMarkerId} 
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
        />
        <Options 
          markerId={currentMarkerId} 
          activeFeature={activeFeature} 
        />
      </div>
  );
}

Tooltip.diplayName="Tooltip";