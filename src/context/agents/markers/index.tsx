// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => {
	return (
		useContext(MarkersContext)
	)
}

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>([]);
	const [ rejectedMarkers, setRejectedMarkers ] = useState<any>([]);
	
	const [ currentMarker, setCurrentMarker ] = useState<any>(null);
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	const [ activePage, setActivePage ] = useState<any>(null);

	const [ radius, setRadius ] = useState(0.5);
	const [ addPin, setAddPin ] = useState(false);

	useEffect(() => {
	   setMarkers((prev: any) => 
	      prev.filter((item: any) => !rejectedMarkers.includes(item))
	   );
	}, [ rejectedMarkers ]);

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			currentMarker, setCurrentMarker,
			currentImage, setCurrentImage,
			activePage, setActivePage,
			rejectedMarkers, setRejectedMarkers,
			radius, setRadius,
			addPin, setAddPin,
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";