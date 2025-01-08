// React imports
import { useCallback, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => useContext(MarkerEventsContext)

export const MarkerEventsProvider = ({children}: any) => {
	const { setMarkers, setRejectedMarkers } = useMarkers();

    const onDrag = useCallback((event: any, id: number) => {
        const { lat, lng } = event.lngLat;

        setMarkers((prev: any) =>
            prev.map((item: any) =>
                item.id === id
                    ? { ...item, latitude: lat, longitude: lng }
                    : item
            )
        );
    }, [ setMarkers ]);

    const rejectMarker = useCallback(
        (event: any, marker: any) => {
            event.stopPropagation();
            setRejectedMarkers((prev: any) => [...prev, marker]);
        },
        [ setRejectedMarkers ]
    );

	return (
		<MarkerEventsContext.Provider value={{
			onDrag, rejectMarker,
		}}>
			{children}
		</MarkerEventsContext.Provider>
	)
}

MarkerEventsContext.displayName = "MarkerEventsContext";