// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import { processPaintProperties } from './color';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from '../markers';

// Third-party imports
import * as turf from '@turf/turf';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();
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
		const circleBoundary = turf.circle(center, radius);

		const currentProperties = mapFeatures.filter((item: any) =>
			item.source === source &&
            item.geometry.type === "Point" &&
			turf.booleanPointInPolygon(item.geometry, circleBoundary)
		);
	    return currentProperties.map((item: any) => ({
	        type: 'Feature',
	        geometry: item.geometry,
	        properties: {
	            ...item.properties,
	            ...processPaintProperties(item.layer.paint, 'circle-color')
	        },
	    }));
	}

	const getLines = (center: any, source: any) => {
	    const circleBoundary = turf.circle(center, radius);
	    const circlePolygon = turf.polygon(circleBoundary.geometry.coordinates);

	    const currentProperties = mapFeatures.filter((item: any) =>
            item.source === source &&
            item.geometry.type === 'LineString' &&
            turf.booleanIntersects(item.geometry, circlePolygon)
	    );

	    return currentProperties.reduce((total: any[], item: any) => {
	        const isFullyInside = turf.booleanWithin(item.geometry, circleBoundary);

	        if (isFullyInside) {
	            total.push({
	                type: 'Feature',
	                geometry: item.geometry,
	                properties: { 
	                	...item.properties, 
	                	...processPaintProperties(item.layer.paint, 'line-color') 
	                },
	            });
	        } else {
	            const clipped = turf.lineSplit(item, circleBoundary);
	            const filteredLines = clipped.features.filter((line: any) =>
	                turf.booleanWithin(line.geometry, circlePolygon)
	            );
	            // Normalize the structure of each clipped line before adding
	            total.push(
	                ...filteredLines.map((line: any) => ({
	                    type: 'Feature',
	                    geometry: line.geometry,
	                    properties: { 
		                	...item.properties, 
		                	...processPaintProperties(item.layer.paint, 'line-color') 
		                },
	                }))
	            );
	        }

	        return total;
	    }, []);
	};

	const getBuildings = (center: any, source: any) => {
		const circleBoundary = turf.circle(center, radius);
		return mapFeatures.filter((item: any) => {
		    if (item.source === source) {
		        const featureGeometry = item.geometry;
		        const featureCentroid = turf.centroid(featureGeometry);
		        return turf.booleanPointInPolygon(featureCentroid, circleBoundary);
		    }
		});
	}

	return (
		<MaskContext.Provider value={{ getPoints, getLines, getBuildings }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";