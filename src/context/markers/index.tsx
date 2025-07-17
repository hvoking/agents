// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const MarkersContext: React.Context<any> = createContext(null);

export const useMarkers = () => useContext(MarkersContext)

export const MarkersProvider = ({children}: any) => {
	const [ markers, setMarkers ] = useState<any>({});
	const [ currentMarkerId, setCurrentMarkerId ] = useState<any>(null);
	const [ currentImage, setCurrentImage ] = useState<any>(null);
	const [ currentProvider, setCurrentProvider ] = useState<any>(null);

	const [ activePage, setActivePage ] = useState<any>(null);

	const [ addPin, setAddPin ] = useState(false);

	const getMarkerId = (markers: any) => {
	    const ids = Object.keys(markers).map(Number);
	    const maxId = ids.length ? Math.max(...ids) : 0;
	    return maxId + 1;
	};

	const activateMarker = (src: any, provider: any) => {
		setAddPin((prev: boolean) => !prev);
		setCurrentImage(src);
		setCurrentProvider(provider);
	}

	const addMarker = (event: any) => {
    	if (addPin === true) {
			const newMarker = {
				id: getMarkerId(markers),
				center: event.lngLat,
				image: currentImage,
				radius: 0.5,
				contoursMinutes: 10,
				fillColor: "rgba(166, 204, 245, 0.8)",
				fillOpacity: 0.1,
				stroke: "rgba(166, 204, 245, 1)",
				strokeWidth: 4,
				strokeOpacity: 0.8,
				routingProfile: "walking",
				boundaryType: "circle",
				activeTrash: false,
				...currentProvider,
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
			currentProvider, setCurrentProvider,
			activePage, setActivePage,
			addPin, setAddPin,
			rejectMarker, activateMarker
		}}>
			{children}
		</MarkersContext.Provider>
	)
}

MarkersContext.displayName = "MarkersContext";