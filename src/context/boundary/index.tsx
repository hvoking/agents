// React imports
import { useState, useContext, createContext } from 'react';

// Context imports
import { useMarkers } from 'context/markers';
import { useGeo } from 'context/geo';

const BoundaryContext: React.Context<any> = createContext(null);

export const useBoundary = () => useContext(BoundaryContext)

export const BoundaryProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { markers, setMarkers, setCurrentMarkerId, addPin, setAddPin, currentImage, currentName } = useMarkers();

	const [ optionsCoords, setOptionsCoords ] = useState<any>(null);
	const [ messageCoords, setMessageCoords ] = useState<any>(null);

	const getId = (markers: any) => {
	    const ids = Object.keys(markers).map(Number);
	    const maxId = ids.length ? Math.max(...ids) : 0;
	    return maxId + 1;
	};

    const addAgent = (event: any) => {
    	if (addPin === true) {
			const newMarker = {
				id: getId(markers),
				center: event.lngLat,
				image: currentImage,
				name: currentName,
				radius: 0.5,
				contoursMinutes: 10,
				fillColor: "rgba(166, 204, 245, 0.8)",
				fillOpacity: 0.1,
				stroke: "rgba(166, 204, 245, 1)",
				strokeWidth: 4,
				strokeOpacity: 0.8,
				routingProfile: "walking",
				geometryType: "circle",
			};
			setMarkers((prev: any) => ({ 
				...prev, 
				[newMarker.id]: newMarker 
			}));
			setAddPin(false);
		}
	};

	const addChatbot = (event: any) => {
		const map = mapRef.current.getMap();

	    if (map.isMoving() || map.isZooming() || map.isRotating()) {
	      return;
	    }

	    if (addPin) {return;}

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

	const onClick = (event: any) => {
		setOptionsCoords(null);
		addChatbot(event);
		addAgent(event);
	}

	return (
		<BoundaryContext.Provider value={{ 
			onContextMenu, onClick,
			optionsCoords, setOptionsCoords,
			messageCoords, setMessageCoords,
			addChatbot
		}}>
			{children}
		</BoundaryContext.Provider>
	)
}

BoundaryContext.displayName = "BoundaryContext";