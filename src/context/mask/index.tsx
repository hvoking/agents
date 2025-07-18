// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { getGeojson } from './helpers';

// Context imports
import { useMarkers } from 'context/markers';
import { useIsochroneApi } from 'context/api/isochrone';
import { useGeo } from 'context/geo';

// Third-party imports
import * as turf from '@turf/turf';

const MaskContext: React.Context<any> = createContext(null);

export const useMask = () => useContext(MaskContext)

export const MaskProvider = ({ children }: any) => {
	const { mapRef } = useGeo();
	const { updateMarkers } = useMarkers();
	const { fetchIsochrone } = useIsochroneApi();

	const [ dragging, setDragging ] = useState(false);

	const onDragStart = (e: any, id: any) =>  {
		setDragging(true);
		updateMarkers(id, 'activeTrash', false);
	};

	const onDrag = (e: any, id: any, boundaryType: any) => {
		if (boundaryType !== "iso") {
			updateMarkers(id, "center", e.lngLat);
		}
	};

	const onDragEnd = (e: any, id: any, boundaryType: any) => {
		setTimeout(() => setDragging(false), 0);
		if (boundaryType === "iso") {
			updateMarkers(id, "center", e.lngLat);
		}
	};

	const activateTrash = (e: any, id: any, activeTrash: any) => {
		e.stopPropagation();
		!dragging && updateMarkers(id, 'activeTrash', activeTrash ? false : true);
	};

	const getBoundary = async (marker: any, setBoundary: any) => {
		const { id, center, radius, boundaryType, layer, geometryType } = marker;
		const currentMap = mapRef.current;
		
		if (boundaryType === 'iso') {
			const data = await fetchIsochrone(marker);
			const currentBoundary = data.features[0];
			updateMarkers(id, 'data', getGeojson(currentMap, currentBoundary, layer, geometryType));
			setBoundary(currentBoundary);
		} else if (center) {
			const circle = turf.circle([center.lng, center.lat], radius);
			const geojson = getGeojson(currentMap, circle, layer, geometryType);
			updateMarkers(id, 'data', geojson);
			setBoundary(circle);
		}
	};

	return (
		<MaskContext.Provider value={{
			onDragStart,
			onDrag,
			onDragEnd,
			getBoundary,
			activateTrash
		}}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";