// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { providers } from './data';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => useContext(MarkersContext)

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>({});
	const [ currentMarkerId, setCurrentMarkerId ] = useState<any>(null);
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	const [ currentName, setCurrentName ] = useState<any>(null);

	const [ activePage, setActivePage ] = useState<any>(null);

	const [ radius, setRadius ] = useState(0.5);
	const [ addPin, setAddPin ] = useState(false);

	const updateMarkers = (markerId: string, property: string, value: number) => {
	    setMarkers((prev: any) => ({
	        ...prev,
	        [markerId]: {
	            ...prev[markerId],
	            [property]: value,
	        },
	    }));
	};

	const colorPalette = [
	    "rgba(144, 238, 144, 1)",
	    "rgba(255, 218, 185, 1)",
	    "rgba(173, 216, 230, 1)",
	    "rgba(255, 250, 205, 1)",
	    "rgba(255, 182, 193, 1)",
	    "rgba(230, 230, 250, 1)",
	    "rgba(152, 251, 152, 1)",
	    "rgba(240, 128, 128, 1)",
	];

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			updateMarkers,
			currentMarkerId, setCurrentMarkerId,
			currentImage, setCurrentImage,
			currentName, setCurrentName,
			activePage, setActivePage,
			radius, setRadius,
			addPin, setAddPin,
			providers, colorPalette,
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";