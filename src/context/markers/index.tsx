// React imports
import { useState, useEffect, useContext, createContext } from 'react';

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

	const getMarkerId = (markers: any) => {
	    const ids = Object.keys(markers).map(Number);
	    const maxId = ids.length ? Math.max(...ids) : 0;
	    return maxId + 1;
	};

	const addMarker = (event: any) => {
    	if (addPin === true) {
			const newMarker = {
				id: getMarkerId(markers),
				center: event.lngLat,
				image: currentImage,
				name: currentName,
				radius: 0.5,
				contoursMinutes: 10,
				fillColor: "rgba(166, 204, 245, 0.8)",
				fillOpacity: 0.1,
				stroke: "rgba(166, 204, 245, 1)",
				strokeWidth: 4,
				strokeOpacity: 0.8,
				routingProfile: "walking",
				geometryType: "circle",
			};
			setMarkers((prev: any) => ({ 
				...prev, 
				[newMarker.id]: newMarker 
			}));
			setAddPin(false);
		}
	};

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
	    "rgba(245, 246, 248, 1)",
	    "rgba(255, 249, 177, 1)",
	    "rgba(244, 208, 62, 1)", 
	    "rgba(230, 127, 34, 1)",
	    "rgba(241, 149, 138, 1)",
	    "rgba(88, 214, 141, 1)",
	    "rgba(166, 204, 245, 1)",
	    "rgba(108, 216, 250, 1)",
	];

	const rejectMarker = (event: any, markerId: any) => {
	    event.stopPropagation();
	    setMarkers((prev: any) => {
	        const { [markerId]: _, ...rest } = prev;
	        return rest;
	    });
	}

	useEffect(() => {
		const handleKeyDown = (event: any) => event.keyCode === 27 && setAddPin(false);
		window.addEventListener('keydown', handleKeyDown);
		
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<MarkersContext.Provider value={{
			markers, setMarkers,
			addMarker,
			updateMarkers,
			currentMarkerId, setCurrentMarkerId,
			currentImage, setCurrentImage,
			currentName, setCurrentName,
			activePage, setActivePage,
			radius, setRadius,
			addPin, setAddPin,
			providers, colorPalette,
			rejectMarker
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";