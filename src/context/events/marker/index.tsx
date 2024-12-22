// React imports
import { useCallback, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => {
	return (
		useContext(MarkerEventsContext)
	)
}

export const MarkerEventsProvider = ({children}: any) => {
	const { markers, setMarkers, setCurrentMarker, setRejectedMarkers } = useMarkers();

    const handleMarkerEvent = useCallback(
        (id: number) => {
            const marker = markers.find((item: any) => item.id === id);
            setCurrentMarker(marker);
        },
        [ markers, setCurrentMarker ]
    );

    const onDrag = useCallback(
        (event: any, id: number) => {
            const { lat, lng } = event.lngLat;

            setMarkers((prev: any) =>
                prev.map((item: any) =>
                    item.id === id
                        ? { ...item, latitude: lat, longitude: lng }
                        : item
                )
            );
        },
        [ setMarkers ]
    );

    const addRejectedId = useCallback(
        (event: any, marker: any) => {
            event.stopPropagation();
            setCurrentMarker((prev: any) => (prev === marker ? null : prev));
            setRejectedMarkers((prev: any) => [...prev, marker]);
        },
        [ setCurrentMarker, setRejectedMarkers ]
    );

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