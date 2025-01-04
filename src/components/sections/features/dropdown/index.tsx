// React imports
import { useState } from 'react';

// App imports
import './styles.scss';

export const Dropdown = ({ layerOptions }: any) => {
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
		      {layerOptions.map((layer: any) => (
		        <div key={layer.id} className="layer-option">
		          <input
		            type="checkbox"
		            id={layer.id}
		            name={layer.label}
		          />
		          <label htmlFor={layer.id}>{layer.label}</label>
		        </div>
		      ))}
		    </div>
		  )}
		</div>
	)
}

Dropdown.displayName="Dropdown";