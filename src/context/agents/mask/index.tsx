// React imports
import { useContext, createContext } from 'react';

// App imports
import { fillProperties, toFeatureCollection, filterFeatures, getColor } from './helpers';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from '../markers';

// Third-party imports
import * as turf from '@turf/turf'
import { signal } from '@preact/signals-react';

const MaskContext: React.Context<any> = createContext(null)

export const useMask = () => useContext(MaskContext)

export const MaskProvider = ({children}: any) => {
	const { mapRef } = useGeo();
	const { radius } = useMarkers();

	const mapFeatures = signal<any[]>([]);
	const sharedGeoJsonDataMap = signal({});

	const map = mapRef.current;
	mapFeatures.value = map?.queryRenderedFeatures();

	const createFeature = (geometry: any, item: any, fillProperty: any) => {
		const currentFeature = {
			type: 'Feature',
			geometry: geometry,
			properties: {
				...item.properties,
				...getColor(item.layer.paint, fillProperty),
			},
		}
		return currentFeature
	}

	const getGeoJson = (boundary: any, source: string, geometryType: string) => {
		let features = filterFeatures(mapFeatures.value, boundary, source, geometryType);
		const fillProperty = fillProperties[geometryType] || 'fill-color';
		
		if (geometryType !== 'LineString') {
			return toFeatureCollection(features, fillProperty);
		}
		
		const currentProperties = features.flatMap((item: any) => {
			if (turf.booleanWithin(item.geometry, boundary)) {
				return createFeature(item.geometry, item, fillProperty);
			}

			return turf.lineSplit(item, boundary)
				.features.filter((line) => turf.booleanWithin(line.geometry, boundary))
				.map((line) => (createFeature(line.geometry, item, fillProperty)));
			});

		return { type: 'FeatureCollection', features: currentProperties};
	};

	return (
		<MaskContext.Provider value={{ getGeoJson, sharedGeoJsonDataMap }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";