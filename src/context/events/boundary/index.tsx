// React imports
import { useState, useCallback, useMemo, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/agents/markers';
import { useGeo } from 'context/geo';

const BoundaryEventsContext: React.Context<any> = createContext(null);

export const useBoundaryEvents = () => {
	return (
		useContext(BoundaryEventsContext)
	)
}

export const BoundaryEventsProvider = ({children}: any) => {
	const [ isDragging, setIsDragging ] = useState(false);
	const [ dragOffset, setDragOffset ] = useState({ x: 0, y: 0 });

	const { markers, setMarkers, currentMarker, setCurrentMarker } = useMarkers();
	const { mapRef } = useGeo();

	const markerLayers = useMemo(() => 
		markers.length > 0 && markers.map((marker: any) => `boundary-fill-${marker.id}`),
		[ markers ]
	);

	const isInside = useCallback((point: any) => {
		const map = mapRef.current;

		if (!map || !(markers.length > 0)) return null;

		const features = map.queryRenderedFeatures(point, {layers: markerLayers,});

		if (features.length > 0) {
			const markerId = features[0].layer.id;
			const selectedMarker = markers.find((marker: any) => `boundary-fill-${marker.id}` === markerId);
		
			if (selectedMarker) setCurrentMarker(selectedMarker);
			return selectedMarker;
		}
		return null;
	}, [ mapRef, markerLayers, markers, setCurrentMarker ]);

	const onDragStart = useCallback((event: any) => {
		const map = mapRef.current;
		if (!map) return;

		const selectedMarker = isInside(event.point);
		if (!selectedMarker) return;

		setIsDragging(true);

		const { x, y } = event.point;
		const { latitude, longitude } = selectedMarker;
		const center = [longitude, latitude];
		const projected = map.project(center);

		setDragOffset({ x: x - projected.x, y: y - projected.y });
	}, [isInside, mapRef]);

	const onMouseMove = useCallback((event: any) => {
		if (!isDragging || !currentMarker) return;
		
		const updatedX = event.point.x - dragOffset.x;
		const updatedY = event.point.y - dragOffset.y;

		const updatedCenter = mapRef.current.unproject({ x: updatedX, y: updatedY });

		const { lat, lng } = updatedCenter;

		setMarkers((prevMarkers: any) => prevMarkers.map((marker: any) =>
			marker.id === currentMarker.id ? 
			{ ...marker, latitude: lat, longitude: lng } : 
			marker
		));

		setCurrentMarker((prev: any) => ({ ...prev, latitude: lat, longitude: lng }));
	}, [ isDragging, dragOffset, mapRef, currentMarker, setMarkers, setCurrentMarker ]);

	const onDragEnd = useCallback(() => {setIsDragging(false)}, []);

	return (
		<BoundaryEventsContext.Provider value={{ onDragStart, onMouseMove, onDragEnd, isDragging }}>
			{children}
		</BoundaryEventsContext.Provider>
	)
}

BoundaryEventsContext.displayName = "BoundaryEventsContext";