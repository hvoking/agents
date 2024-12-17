// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';

// Third party imports
import * as turf from '@turf/turf';

const MarkerEventsContext: React.Context<any> = createContext(null);

export const useMarkerEvents = () => {
	return (
		useContext(MarkerEventsContext)
	)
}

export const MarkerEventsProvider = ({children}: any) => {
	const { markers, setMarkers, currentMarker, setCurrentMarker, setRejectedMarkers, radius } = useMarkers();

	const onDragStart = (marker: any) => {
		setCurrentMarker(marker);
	} 

	const onClick = (marker: any) => {
		setCurrentMarker(marker);
	}

	const onDrag = (event: any, marker: any) => {
	    const { lat, lng } = event.lngLat;

	    const updatedMarkers = markers.map((item: any) =>
	        item.id === marker.id ? 
	        { ...item, latitude: lat, longitude: lng, circle: turf.circle([lng, lat], radius, { steps: 31 }) } : 
	        item
	    );

	    setMarkers(updatedMarkers);
	};

	const addRejectedId = (event: any, marker: any) => {
		event.stopPropagation();
		currentMarker === marker && setCurrentMarker(null);
		setRejectedMarkers((prev: any) => [...prev, marker]);
	}

	return (
		<MarkerEventsContext.Provider value={{
			onDragStart,
			onClick,
			onDrag,
			addRejectedId,
		}}>
			{children}
		</MarkerEventsContext.Provider>
	)
}

MarkerEventsContext.displayName = "MarkerEventsContext";