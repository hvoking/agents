// React imports
import { useState, useEffect, useContext, createContext } from 'react';

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
		const currentProperties = mapFeatures.filter((item: any) => {
	        if (item.source === source) {
	        	const circleBoundary = turf.circle(center, radius);
	        	const pointsWithin = turf.booleanPointInPolygon(item.geometry, circleBoundary);
	            return pointsWithin
	        }
	    });
	    return currentProperties
	}

	// Need to process the line-color because is changed inside the layer
	const processPaintProperties = (paint: any) => {
        const processedPaint = { ...paint };
        if (paint['line-color']) {
            const color = paint['line-color'];
            processedPaint['line-color'] = `
            	rgba(
            		${Math.round(color.r * 255)}, 
            		${Math.round(color.g * 255)}, 
            		${Math.round(color.b * 255)}, 
            		${color.a}
            	)
            `.replace(/\s/g, '');
        }
        return processedPaint;
    };

	const getLines = (center: any, source: any) => {
	    const circleBoundary = turf.circle(center, radius);
	    const circlePolygon = turf.polygon(circleBoundary.geometry.coordinates);

	    const relevantFeatures = mapFeatures.filter((item: any) =>
	            item.source === source &&
	            item.geometry.type === 'LineString' &&
	            turf.booleanIntersects(item.geometry, circlePolygon)
	    );

	    return relevantFeatures.reduce((total: any[], item: any) => {
	        const isFullyInside = turf.booleanWithin(item.geometry, circleBoundary);

	        if (isFullyInside) {
	            total.push({
	                type: 'Feature',
	                geometry: item.geometry,
	                properties: { 
	                	...item.properties, 
	                	...processPaintProperties(item.layer.paint) 
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
		                	...processPaintProperties(item.layer.paint) 
		                },
	                }))
	            );
	        }

	        return total;
	    }, []);
	};

	return (
		<MaskContext.Provider value={{ getPoints, getLines }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";