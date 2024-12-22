// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => {
	return (
		useContext(MarkerEventsContext)
	)
}

export const MarkerEventsProvider = ({children}: any) => {
	const { setMarkers, setCurrentMarker, setRejectedMarkers } = useMarkers();

    const handleMarkerEvent = (marker: any) => {
    	setCurrentMarker(marker);
    } 

    const onDrag = (event: any, id: any) => {
        const { lat, lng } = event.lngLat;

        setMarkers((prev: any) =>
            prev.map((item: any) =>
                item.id === id
                    ? { ...item, latitude: lat, longitude: lng }
                    : item
            )
        );
    };

    const addRejectedId = (event: any, marker: any) => {
    	event.stopPropagation();
    	setCurrentMarker((prev: any) => (prev === marker ? null : prev));
    	setRejectedMarkers((prev: any) => [...prev, marker]);
    }

	return (
		<MarkerEventsContext.Provider value={{
			handleMarkerEvent,
			onDrag,
			addRejectedId,
		}}>
			{children}
		</MarkerEventsContext.Provider>
	)
}

MarkerEventsContext.displayName = "MarkerEventsContext";