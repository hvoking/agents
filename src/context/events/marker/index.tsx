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

        setMarkers((prev: any) => ({
            ...prev,
            [id]: {
                ...prev[id],
                latitude: lat,
                longitude: lng,
            },
        }));
    }, [ setMarkers ]);

    const rejectMarker = useCallback(
        (event: any, markerId: any) => {
            event.stopPropagation();
            setMarkers((prev: any) => {
                const { [markerId]: _, ...rest } = prev;
                return rest;
            });
        },
        [ setMarkers ]
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