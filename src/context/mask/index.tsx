// React imports
import { useContext, createContext } from 'react';

// App imports
import { fillProperties, toFeatureCollection, filterLines, filterGeometries, getColor } from './helpers';

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

	const toGeojsonFeature = (geometry: any, item: any, fillProperty: any) => {
		const { properties: currentProperties, layer } = item;
		const color = getColor(layer.paint, fillProperty);
		const properties = { ...currentProperties, ...color };
		const currentFeature = { type: 'Feature', geometry, properties }
		return currentFeature
	}

	const getLinesFeatures = (features: any, boundary: any, fillProperty: any) => {
		const linesFeatures = features.flatMap((item: any) => {
			if (turf.booleanWithin(item.geometry, boundary)) {
				return toGeojsonFeature(item.geometry, item, fillProperty);
			}

			const linesSplit = turf.lineSplit(item, boundary);
			const linesWithin = linesSplit.features.filter((line) => turf.booleanWithin(line.geometry, boundary));
			const linesGeojson = linesWithin.map((line) => (toGeojsonFeature(line.geometry, item, fillProperty)));
			
			return linesGeojson;
		});

		return linesFeatures;
	}

	const getGeojson = (boundary: any, source: string, geometryType: string) => {
		const fillProperty = fillProperties[geometryType] || 'fill-color';
		const isLine = geometryType === 'LineString';
		
		if (!isLine) {
			const geomFeatures = filterGeometries(mapFeatures.value, boundary, source);
			return toFeatureCollection(geomFeatures, fillProperty);
		}
		const features = filterLines(mapFeatures.value, boundary, source, geometryType);
		const linesFeatures = getLinesFeatures(features, boundary, fillProperty);

		return { type: 'FeatureCollection', features: linesFeatures};
	};

	return (
		<MaskContext.Provider value={{ getGeojson, sharedGeoJsonDataMap }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";