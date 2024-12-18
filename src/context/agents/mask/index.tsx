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

    const getPoints = (boundary: any, source: any) => { 
    	console.log(mapFeatures)
		const currentProperties = mapFeatures.filter((item: any) =>
			item.source === source &&
			item.geometry.type === "Point" &&
			turf.booleanPointInPolygon(item.geometry, boundary)
		);

		return {
			type: 'FeatureCollection',
			features: currentProperties.map((item: any) => ({
			type: 'Feature',
			geometry: item.geometry,
			properties: {
				...item.properties,
				...processPaintProperties(item.layer.paint, 'circle-color'),
			},
			})),
		};
	};

	const getLines = (boundary: any, source: any) => {
	    const currentProperties = mapFeatures.filter((item: any) =>
            item.source === source &&
            item.geometry.type === 'LineString' &&
            turf.booleanIntersects(item.geometry, boundary)
	    );

	    const features = currentProperties.reduce((total: any[], item: any) => {
	        const isFullyInside = turf.booleanWithin(item.geometry, boundary);

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
	            const clipped = turf.lineSplit(item, boundary);
	            const filteredLines = clipped.features.filter((line: any) =>
	                turf.booleanWithin(line.geometry, boundary)
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

	    return {
	      type: 'FeatureCollection',
	      features: features.map((item: any) => ({
	        type: 'Feature',
	        geometry: item.geometry,
	        properties: item.properties,
	      })),
	    };
	};

	const getBuildings = (boundary: any, source: any) => {
		const currentProperties = mapFeatures.filter((item: any) => {
		    if (item.source === source) {
		        const featureGeometry = item.geometry;
		        const featureCentroid = turf.centroid(featureGeometry);
		        return turf.booleanPointInPolygon(featureCentroid, boundary);
		    }
		});
		return {
		  type: 'FeatureCollection',
		  features: currentProperties.map((item: any) => ({
		    type: 'Feature',
		    geometry: item.geometry,
		    properties: item.properties,
		  })),
		};
	}

	return (
		<MaskContext.Provider value={{ getPoints, getLines, getBuildings }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";