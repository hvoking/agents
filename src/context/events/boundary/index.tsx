// React imports
import { useState, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/markers';
import { useGeo } from 'context/geo';

const BoundaryEventsContext: React.Context<any> = createContext(null);

export const useBoundaryEvents = () => useContext(BoundaryEventsContext)

export const BoundaryEventsProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { markers, setCurrentMarkerId } = useMarkers();

	const [ optionsCoords, setOptionsCoords ] = useState<any>(null);
	const [ messageCoords, setMessageCoords ] = useState<any>(null);

	const isInside = (point: any) => {
		const map = mapRef.current;
		if (!map) return null;

		const markerLayers = Object.keys(markers).map((id) => `boundary-fill-${id}`);
		const features = map.queryRenderedFeatures(point, { layers: markerLayers });
		if (!features.length) return null;

		const markerId = features[0].layer.id.replace("boundary-fill-", "");
		setCurrentMarkerId(markerId);
		return markerId || null;
	}

	const onContextMenu = (event: any) => {
		event.preventDefault();
		const map = mapRef.current.getMap();

	    if (map.isMoving() || map.isZooming() || map.isRotating()) {
	      return;
	    }

	    const { point, lngLat } = event;
		const markerId = isInside(point);

		setMessageCoords(null);
		
		!markerId ? 
		setOptionsCoords(null) : 
		setOptionsCoords(lngLat);
	}

	const addChatbot = (event: any) => {
		const map = mapRef.current.getMap();

	    if (map.isMoving() || map.isZooming() || map.isRotating()) {
	      return;
	    }

	    const { point, lngLat } = event;
		const markerId = isInside(point);

		if (!messageCoords) {
			!markerId ? 
			setMessageCoords(null) : 
			setMessageCoords(lngLat);
		}
		else {
			setMessageCoords(null);
		}
	}

	return (
		<BoundaryEventsContext.Provider value={{ 
			onContextMenu, 
			optionsCoords, setOptionsCoords,
			messageCoords, setMessageCoords,
			addChatbot
		}}>
			{children}
		</BoundaryEventsContext.Provider>
	)
}

BoundaryEventsContext.displayName = "BoundaryEventsContext";