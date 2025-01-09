// React imports
import { useState, useCallback, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';
import { useGeo } from 'context/geo';

const BoundaryEventsContext: React.Context<any> = createContext(null);

export const useBoundaryEvents = () => useContext(BoundaryEventsContext)

export const BoundaryEventsProvider = ({children}: any) => {
	const [ optionsCoords, setOptionsCoords ] = useState<any>(null);

	const [ isDragging, setIsDragging ] = useState(false);
	const [ dragOffset, setDragOffset ] = useState({ x: 0, y: 0 });

	const { markers, setMarkers, currentMarkerId, setCurrentMarkerId } = useMarkers();
	const { mapRef } = useGeo();

	const isInside = useCallback((point: any) => {
		const map = mapRef.current;
		if (!map) return null;

		const markerLayers = Object.keys(markers).map((id: any) => `boundary-fill-${id}`);
		
		const features = map.queryRenderedFeatures(point, { layers: markerLayers });
		if (!features.length) return null;

		const markerId = features[0].layer.id.replace("boundary-fill-", "");

		return markers[markerId] || null;

	}, [ mapRef, markers ]);

	const onMouseDown = useCallback((event: any) => {
		const map = mapRef.current;
		if (!map) return;

		const selectedMarker = isInside(event.point);
		if (!selectedMarker) return;

		setIsDragging(true);

		const { x, y } = event.point;
		const { latitude, longitude } = selectedMarker;
		const projected = map.project([ longitude, latitude ]);

		setDragOffset({ x: x - projected.x, y: y - projected.y });
	}, [ isInside, mapRef ]);

	const handleRightClick = useCallback((event: any) => {
		event.preventDefault();

		const map = mapRef.current;
		if (!map) return;

		const selectedMarker = isInside(event.point);
		if (!selectedMarker) return;
		
		setOptionsCoords((prev: any) => prev === null ? event.lngLat : null);
	}, [ isInside, mapRef ]);

	const onMouseMove = useCallback((event: any) => {
		if (isDragging) {
			const { x, y } = event.point;
			const offset = { x: x - dragOffset.x, y: y - dragOffset.y};

	        const updatedCenter = mapRef.current.unproject(offset);
	        const { lat, lng } = updatedCenter;

	        setMarkers((prev: any) => ({
	            ...prev,
	            [currentMarkerId]: {
	                ...prev[currentMarkerId],
	                latitude: lat,
	                longitude: lng,
	            },
	        }));
	        return;
	    }

	    const selectedMarker = isInside(event.point);

	    if (selectedMarker) {
	    	if (currentMarkerId !== selectedMarker.id) {
	    		setCurrentMarkerId(selectedMarker.id);
	    	}
	    } 
	    else {
	    	if (currentMarkerId) {
	    		setCurrentMarkerId(null);
	    	}
	    }

	},[ isDragging, dragOffset, mapRef, currentMarkerId, isInside ]);

	const onMouseUp = useCallback(() => {setIsDragging(false)}, []);

	return (
		<BoundaryEventsContext.Provider value={{ 
			onMouseDown, 
			onMouseMove, 
			onMouseUp, 
			isDragging,
			handleRightClick,
			optionsCoords,

		}}>
			{children}
		</BoundaryEventsContext.Provider>
	)
}

BoundaryEventsContext.displayName = "BoundaryEventsContext";