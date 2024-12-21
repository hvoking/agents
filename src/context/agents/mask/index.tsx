// React imports
import { useContext, createContext } from 'react';

// App imports
import { processPaintProperties } from './color';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from '../markers';

// Third-party imports
import * as turf from '@turf/turf';
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => {
	return (
		useContext(MaskContext)
	)
}

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { radius } = useMarkers();

	const mapFeatures = signal<any[]>([]);
	const map = mapRef.current;

    mapFeatures.value = map?.queryRenderedFeatures();

    const getPoints = (boundary: any, source: any) => { 
		const currentProperties = mapFeatures.value.filter((item: any) =>
			item.source === source &&
			item.geometry.type === "Point" &&
			turf.booleanPointInPolygon(item.geometry, boundary)
		);
		return {
			type: 'FeatureCollection',
			features: currentProperties.flatMap((item: any) => ({
				type: 'Feature',
				geometry: item.geometry,
				properties: {
					...item.properties,
					...processPaintProperties(item.layer.paint, 'circle-color'),
				},
			})),
		};
	};

	const getPolygons = (boundary: any, source: any) => {
		const features = mapFeatures.value.filter((item: any) => 
			item.source === source &&
			item.geometry.type === 'Polygon' &&
	        turf.booleanPointInPolygon(turf.centroid(item.geometry), boundary)
		);

		return {
		  type: 'FeatureCollection',
		  features
		};
	}

	const getLines = (boundary: any, source: any) => {
	    const currentProperties = mapFeatures.value.filter(item =>
			item.source === source &&
			item.geometry.type === 'LineString' &&
			turf.booleanIntersects(item.geometry, boundary)
		);

	    const features = currentProperties.flatMap((item: any) => {
	        if (turf.booleanWithin(item.geometry, boundary)) {
	            return [{
	                type: 'Feature',
	                geometry: item.geometry,
	                properties: { 
	                	...item.properties, 
	                	...processPaintProperties(item.layer.paint, 'line-color') 
	                },
	            }];
	        }

            return turf.lineSplit(item, boundary)
                .features
                .filter(line => turf.booleanWithin(line.geometry, boundary))
                .map(line => ({
                    type: 'Feature',
                    geometry: line.geometry,
                    properties: {
                        ...item.properties,
                        ...processPaintProperties(item.layer.paint, 'line-color'),
                    },
                }));
	    });

	    return {
			type: 'FeatureCollection',
			features
		}
	};


	return (
		<MaskContext.Provider value={{ getPoints, getLines, getPolygons }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";