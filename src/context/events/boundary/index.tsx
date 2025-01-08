// React imports
import { useState, useCallback, useMemo, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';
import { useGeo } from 'context/geo';

const BoundaryEventsContext: React.Context<any> = createContext(null);

export const useBoundaryEvents = () => useContext(BoundaryEventsContext)

export const BoundaryEventsProvider = ({children}: any) => {
	const [ isDragging, setIsDragging ] = useState(false);
	const [ dragOffset, setDragOffset ] = useState({ x: 0, y: 0 });

	const { markers, setMarkers, currentMarkerId, setCurrentMarkerId } = useMarkers();
	const { mapRef } = useGeo();

	const markerLayers = useMemo(
		() => markers.map((marker: any) => `boundary-fill-${marker.id}`),
		[ markers ]
	);

	const isInside = useCallback((point: any) => {
		const map = mapRef.current;

		if (!map) return null;

		const features = map.queryRenderedFeatures(point, {layers: markerLayers,});

		if (!features.length) return null;
		
		const markerId = features[0].layer.id;
		const selectedMarker = markers.find((marker: any) => `boundary-fill-${marker.id}` === markerId);
		if (selectedMarker) setCurrentMarkerId(selectedMarker.id);

		return selectedMarker;
	}, [ mapRef, markerLayers, markers, setCurrentMarkerId ]);

	const onDragStart = useCallback((event: any) => {
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

	const onMouseMove = useCallback((event: any) => {
		if (!isDragging || !currentMarkerId) return;

		const { x, y } = event.point;
		
		const offset = { 
			x: x - dragOffset.x, 
			y: y - dragOffset.y 
		}

		const updatedCenter = mapRef.current.unproject(offset);

		const { lat, lng } = updatedCenter;

		setMarkers((prev: any) => prev.map((marker: any) =>
			marker.id === currentMarkerId ?
			{ ...marker, latitude: lat, longitude: lng } : 
			marker
		));

	}, [ isDragging, dragOffset, mapRef, currentMarkerId, setMarkers ]);

	const onDragEnd = useCallback(() => {setIsDragging(false)}, []);

	return (
		<BoundaryEventsContext.Provider value={{ onDragStart, onMouseMove, onDragEnd, isDragging }}>
			{children}
		</BoundaryEventsContext.Provider>
	)
}

BoundaryEventsContext.displayName = "BoundaryEventsContext";