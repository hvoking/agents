// React imports
import { useState, useEffect, useCallback, useContext, createContext } from 'react';

// App imports
import { useMapbox } from '../mapbox';
import { useMarkers } from '../markers';

const MapEventsContext: React.Context<any> = createContext(null);

export const useMapEvents = () => {
	return (
		useContext(MapEventsContext)
	)
}

export const MapEventsProvider = ({children}: any) => {
		const { mapRef } = useMapbox();
		const { markers, setMarkers, currentMarker, setCurrentMarker, addPin, setAddPin, currentImage } = useMarkers();

		const [ isDragging, setIsDragging ] = useState(false);
		const [ dragOffset, setDragOffset ] = useState({ x: 0, y: 0 });

		const isClickInsideCircle = useCallback(
	        (point: { x: number, y: number }) => {
	            const features = mapRef.current?.queryRenderedFeatures(point, {
	                layers: ['layer-mask']
	            });
	            return features && features.length > 0;
	        },
	        [ mapRef ]
	    );

	    const onDragStart = useCallback(
	        (event: any) => {
	            if (isClickInsideCircle(event.point) && currentMarker) {
	                setIsDragging(true);
	                const { x, y } = event.point;
	                const projected = mapRef.current.project([currentMarker.longitude, currentMarker.latitude]);
	                setDragOffset({ x: x - projected.x, y: y - projected.y });
	            }
	        },
	        [ isClickInsideCircle, currentMarker, mapRef ]
	    );

	    const onMouseMove = useCallback(
	        (event: any) => {
	            if (isDragging) {
	            	const newCenter = mapRef.current.unproject({
	            	    x: event.point.x - dragOffset.x,
	            	    y: event.point.y - dragOffset.y
	            	});

	            	const lat = newCenter.lat;
	            	const lng = newCenter.lng;
	                
                    const updatedMarkers = markers.map((previousMarker: any) => {
        				const isCurrentMarker = previousMarker.id === currentMarker.id;
        				
        				if (isCurrentMarker) {
        					const updatedMarker = {...previousMarker, latitude: lat, longitude: lng};
        					setCurrentMarker(updatedMarker)
        					return updatedMarker
        				}
        				return previousMarker
        			});
        			updatedMarkers && setMarkers(updatedMarkers);
	            }
	        },[ isDragging, dragOffset, mapRef, setCurrentMarker ]);

	    const onDragEnd = useCallback(() => {
	        setIsDragging(false);
	    }, []);

    const onClick = (event: any) => {
      if (addPin === true) {
        const currentId = markers.length > 0 ? markers.length + 1 : 1;
        const lng = event.lngLat.lng;
        const lat = event.lngLat.lat;

        const newMarker = {
          id: currentId,
          latitude: lat,
          longitude: lng,
          color: "rgba(244, 173, 79, 1)",
          image: currentImage
        };

        setCurrentMarker(newMarker);
        const updatedMarkers = markers.length > 0 ? [...markers, newMarker] : [newMarker];
        setMarkers(updatedMarkers);
        setAddPin(false);
      }
    };

	useEffect(() => {
		const handleKeyDown = (event: any) => event.keyCode === 27 && setAddPin(false);
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<MapEventsContext.Provider value={{
			isDragging,
			onDragStart,
			onMouseMove,
			onDragEnd,
			onClick
		}}>
			{children}
		</MapEventsContext.Provider>
	)
}

MapEventsContext.displayName = "MapEventsContext";