// React imports
import { useState } from 'react';

// App imports
import './styles.scss';

const layerOptions = [
  { id: 'overture-buildings', label: 'Overture Buildings' },
  { id: 'overture-roads', label: 'Overture Roads' },
  { id: 'foursquare-poi', label: 'Foursquare POI' },
  { id: 'inside-airbnb', label: 'Inside Airbnb' },
];

export const Dropdown = ({ index }: any) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	return (
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
	)
}

Dropdown.displayName="Dropdown";