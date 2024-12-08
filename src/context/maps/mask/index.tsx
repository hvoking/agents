// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useMapbox } from 'context/maps/mapbox';
import { useMarkers } from 'context/maps/markers';

// Third-party imports
import * as turf from '@turf/turf';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useMapbox();
	const { radius } = useMarkers();

	const [ mapFeatures, setMapFeatures ] = useState([]);
	const [ activeFeatures, setActiveFeatures ] = useState(false);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;
		const onData = (e: any) => e.tile && setActiveFeatures((prev) => !prev);
	    map.on('data', onData);
	    return () => {map.off('data', onData)};
	}, [ mapRef.current ]);

	useEffect(() => {
		const map = mapRef.current;
		if (!map) return;
		const features = map.queryRenderedFeatures();
		setMapFeatures(features);
	}, [ activeFeatures, mapRef.current ]);

	const getProperties = (center: any, source: any) => { 
		const currentProperties = mapFeatures.filter((item: any) => {
	        if (item.source === source) {
	        	const circleBoundary = turf.circle(center, radius);
	        	const pointsWithin = turf.booleanPointInPolygon(item.geometry, circleBoundary);
	            return pointsWithin
	        }
	    });
	    return currentProperties
	}

	return (
		<MaskContext.Provider value={{ getProperties }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";