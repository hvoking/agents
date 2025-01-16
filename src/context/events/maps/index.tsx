// React imports
import { useEffect, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MapEventsContext: React.Context<any> = createContext(null);

export const useMapEvents = () => useContext(MapEventsContext)

export const MapEventsProvider = ({children}: any) => {
	const { markers, setMarkers, addPin, setAddPin, currentImage, currentName } = useMarkers();

	const getId = (markers: any) => {
	    const ids = Object.keys(markers).map(Number);
	    const maxId = ids.length ? Math.max(...ids) : 0;
	    return maxId + 1;
	};

    const addAgent = (event: any) => {
    	if (addPin === true) {
    		const { lng, lat } = event.lngLat;
			
			const newMarker = {
				id: getId(markers),
				latitude: lat,
				longitude: lng,
				image: currentImage,
				name: currentName,
				radius: 0.5,
				contoursMinutes: 10,
				fillColor: "rgba(88, 214, 141, 0.6)",
				fillOpacity: 0.1,
				stroke: "rgba(166, 204, 245, 1)",
				strokeWidth: 4,
				strokeOpacity: 0.8,
				routingProfile: "walking",
				geometryType: "circle",
			};
			
			setMarkers((prev: any) => ({
			    ...prev,
			    [newMarker.id]: newMarker,
			}));
			setAddPin(false);
		}
	};

	useEffect(() => {
		const handleKeyDown = (event: any) => event.keyCode === 27 && setAddPin(false);
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<MapEventsContext.Provider value={{ addAgent }}>
			{children}
		</MapEventsContext.Provider>
	)
}

MapEventsContext.displayName = "MapEventsContext";