// React imports
import { useState, useRef, useCallback, useMemo, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';
import { useGeo } from 'context/geo';

const BoundaryEventsContext: React.Context<any> = createContext(null);

export const useBoundaryEvents = () => useContext(BoundaryEventsContext)

export const BoundaryEventsProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { markers, setCurrentMarkerId } = useMarkers();

	const [ optionsCoords, setOptionsCoords ] = useState<any>(null);

	const markerLayers = useMemo(() => 
		Object.keys(markers).map((id) => `boundary-fill-${id}`), [markers]);

	const isInside = (point: any) => {
		const map = mapRef.current;
		if (!map) return null;

		const features = map.queryRenderedFeatures(point, { layers: markerLayers });
		if (!features.length) return null;

		const markerId = features[0].layer.id.replace("boundary-fill-", "");
		setCurrentMarkerId(markerId);
		return markers[markerId] || null;
	}

	const onContextMenu = (event: any) => {
		event.preventDefault();
		const map = mapRef.current.getMap();
	    if (map.isMoving() || map.isZooming() || map.isRotating()) {
	      return;
	    }
		const selectedMarker = isInside(event.point);
		!selectedMarker ? setOptionsCoords(null) : setOptionsCoords(event.lngLat);
	}

	return (
		<BoundaryEventsContext.Provider value={{ 
			onContextMenu, 
			optionsCoords,
			setOptionsCoords
		}}>
			{children}
		</BoundaryEventsContext.Provider>
	)
}

BoundaryEventsContext.displayName = "BoundaryEventsContext";