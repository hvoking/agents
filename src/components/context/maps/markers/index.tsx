// React imports
import { useState, useContext, createContext } from 'react';

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

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			activeTrash, setActiveTrash,
			rejectedMarkers, setRejectedMarkers,
			addPin, setAddPin
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";