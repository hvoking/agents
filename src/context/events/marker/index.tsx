// React imports
import { useCallback, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => useContext(MarkerEventsContext)

export const MarkerEventsProvider = ({children}: any) => {
	const { setMarkers } = useMarkers();

    const onDrag = useCallback((event: any, markerId: number) => {
        const { lat, lng } = event.lngLat;

        setMarkers((prev: any) => ({
            ...prev,
            [markerId]: {
                ...prev[markerId],
                latitude: lat,
                longitude: lng,
            },
        }));
    }, [ setMarkers ]);

    const rejectMarker = (event: any, markerId: any) => {
        event.stopPropagation();
        setMarkers((prev: any) => {
            const { [markerId]: _, ...rest } = prev;
            return rest;
        });
    }

	return (
		<MarkerEventsContext.Provider value={{
			onDrag, rejectMarker,
		}}>
			{children}
		</MarkerEventsContext.Provider>
	)
}

MarkerEventsContext.displayName = "MarkerEventsContext";