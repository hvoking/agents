// React imports
import { useState, useContext, createContext } from 'react';

import { LayerProps } from 'react-map-gl';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => {
	return (
		useContext(MarkersContext)
	)
}

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState([]);
	const [ currentMarker, setCurrentMarker ] = useState<any>(null);
	const [ activeTrash, setActiveTrash ] = useState(false);
	const [ addPin, setAddPin ] = useState(false);
	const [ rejectedMarkers, setRejectedMarkers ] = useState([]);

	const [ radius, setRadius ] = useState(1);

  	const circleGeometry = currentMarker && {
  	    type: 'Feature',
  	    geometry: {
  	        type: 'Point',
  	        coordinates: [currentMarker.longitude, currentMarker.latitude]
  	    }
  	};

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			activeTrash, setActiveTrash,
			rejectedMarkers, setRejectedMarkers,
			addPin, setAddPin,
			circleGeometry, 
			radius, setRadius
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";