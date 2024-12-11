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
	
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	
	const [ activePage, setActivePage ] = useState<any>(null);
	const [ rejectedMarkers, setRejectedMarkers ] = useState<any>([]);

	const [ radius, setRadius ] = useState(0.5);
	const [ addPin, setAddPin ] = useState(false);

	const { fillColor } = useColors();

  	const existingMarkers = markers.length > 0;

  	useEffect(() => {
	  	  const updatedMarkers = existingMarkers && markers.filter((marker: any) => {
	  	  	if (!rejectedMarkers.includes(marker)) {
		  	    const isCurrentMarker = marker && currentMarker && marker.id === currentMarker.id;
		  	    return (
		  	      isCurrentMarker ? { ...marker, color: fillColor } : marker
		  	    )
	  		}
	  	  });
	  	  existingMarkers && setMarkers(updatedMarkers);
  	}, [ fillColor, rejectedMarkers ]);

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			rejectedMarkers, setRejectedMarkers,
			radius, setRadius,
			addPin, setAddPin,
			activePage, setActivePage,
			currentImage, setCurrentImage
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";