// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import { providers } from './data';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => {
	return (
		useContext(MarkersContext)
	)
}

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>([]);
	const [ currentMarker, setCurrentMarker ] = useState<any>(null);
	const [ rejectedMarkers, setRejectedMarkers ] = useState<any>([]);
	
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	const [ currentName, setCurrentName ] = useState<any>(null);

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
			currentName, setCurrentName,
			activePage, setActivePage,
			rejectedMarkers, setRejectedMarkers,
			radius, setRadius,
			addPin, setAddPin,
			providers,
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";