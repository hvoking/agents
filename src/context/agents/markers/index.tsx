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
	    "rgb(204, 255, 230)",
	    "rgb(255, 229, 204)",
	    "rgb(223, 246, 255)",
	    "rgb(255, 255, 204)",
	    "rgb(255, 204, 203)",
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