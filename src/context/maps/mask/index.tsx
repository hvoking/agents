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

	const getPoints = (center: any, source: any) => { 
		const currentProperties = mapFeatures.filter((item: any) => {
	        if (item.source === source) {
	        	const circleBoundary = turf.circle(center, radius);
	        	const pointsWithin = turf.booleanPointInPolygon(item.geometry, circleBoundary);
	            return pointsWithin
	        }
	    });
	    return currentProperties
	}

	const getLines = (center: any, source: any) => {
	    const circleBoundary = turf.circle(center, radius);
	    const circlePolygon = turf.polygon(circleBoundary.geometry.coordinates);

	    const relevantFeatures = mapFeatures.filter(
            (item: any) =>
                item.source === source &&
                item.geometry.type === 'LineString' &&
                !turf.booleanDisjoint(item.geometry, circlePolygon)
        );

	    return relevantFeatures.flatMap((item: any) => {
	        const intersections = turf.lineIntersect(item.geometry, circleBoundary);
	        
	        const intersectionPoints = new Set(
	            intersections.features.map((point: any) =>
	                point.geometry.coordinates.join(',')
	            )
	        );

	        const lineCoords = item.geometry.coordinates;
	        const splitSegments: any[] = [];
	        let currentSegment: any[] = [];

	        for (let i = 0; i < lineCoords.length - 1; i++) {
	            const start = lineCoords[i];
	            const end = lineCoords[i + 1];

	            currentSegment.push(start);

	            intersections.features.forEach((point: any) => {
	                const intersection = point.geometry.coordinates;
	                if (
	                    intersectionPoints.has(intersection.join(',')) &&
	                    turf.booleanPointOnLine(intersection, {
	                        type: 'LineString',
	                        coordinates: [start, end],
	                    })
	                ) {
	                    currentSegment.push(intersection);
	                    splitSegments.push([...currentSegment]);
	                    currentSegment = [intersection];
	                }
	            });
	            currentSegment.push(end);
	        }

	        if (currentSegment.length > 0) {
	            splitSegments.push(currentSegment);
	        }

	        return splitSegments.filter((segment: any) =>
	            segment.every(([lng, lat]: any) => 
	                turf.booleanPointInPolygon([lng, lat], circlePolygon)
	            )
	        );
	    });
	};

	return (
		<MaskContext.Provider value={{ getPoints, getLines }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";