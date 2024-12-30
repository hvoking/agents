import { CancelCross } from './cross';
import { Header } from './header';
import { Graphics } from './graphics';
import './styles.scss';
import { useMarkers } from 'context/agents/markers';
import { useState } from 'react';

const layerOptions = [
  { id: 'overture-buildings', label: 'Overture Buildings' },
  { id: 'overture-roads', label: 'Overture Roads' },
  { id: 'foursquare-poi', label: 'Foursquare POI' },
  { id: 'inside-airbnb', label: 'Inside Airbnb' },
];

export const Charts = () => {
  const { markers } = useMarkers();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  if (!(markers.length > 0)) return <></>;

  return (
    <div className="charts">
      {markers.map((marker: any, index: number) => (
        <div key={index} className="agent-card">
          <CancelCross marker={marker} />
          <Header name={`Agent ${index + 1}`} marker={marker} />
            <Graphics id={index} />
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Layers
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {layerOptions.map((layer) => (
                  <div key={layer.id} className="layer-option">
                    <input
                      type="checkbox"
                      id={`${layer.id}-${index}`}
                      name={`${layer.id}-${index}`}
                    />
                    <label htmlFor={`${layer.id}-${index}`}>{layer.label}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Charts.displayName = 'Charts';
