// React imports
import { useEffect, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MapEventsContext: React.Context<any> = createContext(null);

export const useMapEvents = () => useContext(MapEventsContext)

export const MapEventsProvider = ({children}: any) => {
	const { markers, setMarkers, addPin, setAddPin, currentImage, currentName } = useMarkers();

	const getId = (markers: any) => {
		const lastIndex = markers.length - 1;
		const lastMarker = markers[lastIndex];
		const currentId = markers.length > 0 ? lastMarker.id + 1 : 1;
		return currentId
	}

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
				color: "rgba(223, 246, 255, 1)",
				routingProfile: "walking",
			};
			setMarkers((prev: any) => [...prev, newMarker]);
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