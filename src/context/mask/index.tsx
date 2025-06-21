// React imports
import { useContext, createContext } from 'react';

// App imports
import { fillProperties, toFeatureCollection, filterGeometries, filterLines, getColor } from './helpers';

// Context imports
import { useGeo } from 'context/geo';
import { useMarkers } from 'context/markers';

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

	const getGeojson = (boundary: any, source: string, geometryType: string) => {
		const fillProperty = fillProperties[geometryType] || 'fill-color';
		const isLine = geometryType === 'LineString';
		
		if (!isLine) {
			const geomFeatures = filterGeometries(mapFeatures.value, boundary, source);
			return toFeatureCollection(geomFeatures, fillProperty);
		}
		const features = filterLines(mapFeatures.value, boundary, source, geometryType, fillProperty);
		return { type: 'FeatureCollection', features};
	};

	return (
		<MaskContext.Provider value={{ getGeojson, sharedGeoJsonDataMap }}>
			{children}
		</MaskContext.Provider>
	)
}

MaskContext.displayName = "MaskContext";