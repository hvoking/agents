// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useColors } from 'context/colors';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => {
	return (
		useContext(MarkersContext)
	)
}

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>([]);
	const [ currentMarker, setCurrentMarker ] = useState<any>(null);
	const [ activeTrash, setActiveTrash ] = useState(false);
	const [ rejectedMarkers, setRejectedMarkers ] = useState<any>([]);
	const [ radius, setRadius ] = useState(1);

	const [ addPin, setAddPin ] = useState(false);

	// Sidebar Visibility
	const [ activePage, setActivePage ] = useState("home");

	const { fillColor } = useColors();

  	const existingMarkers = markers.length > 0;

  	useEffect(() => {
  	  const updatedMarkers = existingMarkers && markers.map((marker: any) => {
  	    const isCurrentMarker = marker && currentMarker && marker.id === currentMarker.id;
  	    return (
  	      isCurrentMarker ? { ...marker, color: fillColor } : marker
  	    )
  	  });
  	  existingMarkers && setMarkers(updatedMarkers);
  	}, [ fillColor ]);

  	const filteredMarkers = existingMarkers && markers.filter((item: any) => !rejectedMarkers.includes(item));

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			activeTrash, setActiveTrash,
			rejectedMarkers, setRejectedMarkers,
			radius, setRadius,
			filteredMarkers,
			addPin, setAddPin,
			activePage, setActivePage
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";